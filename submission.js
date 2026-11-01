'use strict';
(function (root) {
  const MAX_BYTES = 25 * 1024 * 1024;
  // Forminit's documented formats. Its server also validates uploaded content.
  const extensions = new Set(('pdf doc docx ppt pptx xls xlsx csv rtf html htm txt sketch xml epub azw mobi ' +
    'jpg jpeg png gif webp tif tiff heic svg psd ai ps eps mp3 wma webm mp4 flv avi mov scm zip rar tar 7z key pages numbers').split(' '));
  const validFormId = id => typeof id === 'string' && /^[a-zA-Z0-9_-]{4,100}$/.test(id);

  function selectFiles(existing, incoming) {
    const selected = existing.slice();
    for (const file of incoming) {
      const extension = file.name.includes('.') ? file.name.split('.').pop().toLowerCase() : '';
      if (!extensions.has(extension)) return { error: `${file.name}：Forminit 暂未列为支持格式，请转成常用格式或提供网盘链接。本次新选择未添加。` };
      if (!Number.isFinite(file.size) || file.size <= 0) return { error: `${file.name}：文件为空或无法读取。本次新选择未添加。` };
      if (selected.some(item => item.name === file.name && item.size === file.size && item.lastModified === file.lastModified)) continue;
      selected.push(file);
    }
    const total = selected.reduce((sum, file) => sum + file.size, 0);
    if (total > MAX_BYTES) return { error: `全部附件合计 ${(total / 1024 / 1024).toFixed(2)} MB，超过 25 MB。本次新选择未添加，请减少文件、压缩或提供网盘链接。` };
    return { files: selected, added: selected.length - existing.length, total };
  }

  function responseError(status, body) {
    if (status === 429) return '提交过于频繁，请至少等待 5 秒再试。';
    if (body?.error === 'LIMIT_EXPIRED') return '接收服务的额度暂时已满，当前提交未成功。';
    if (status === 413) return '接收服务拒绝了过大的附件，请减少文件大小后重试。';
    if ([401, 403, 404].includes(status)) return '接收服务暂时不可用，当前提交未成功。';
    if (status === 400 || status === 415 || status === 422) return '接收服务未通过字段或文件校验，请检查内容和附件格式。';
    return '未能确认提交结果，请先联系我们核实，避免重复发送。';
  }

  function send(formId, formData, onProgress = () => {}, createXHR = () => new XMLHttpRequest()) {
    if (!validFormId(formId)) return Promise.reject(new Error('尚未配置接收表单。'));
    return new Promise((resolve, reject) => {
      const request = createXHR();
      request.open('POST', `https://forminit.com/f/${formId}`);
      request.timeout = 180000;
      request.setRequestHeader('Accept', 'application/json');
      // The browser generates the multipart boundary. Never set Content-Type here.
      request.upload.addEventListener('progress', event => {
        if (event.lengthComputable) onProgress(Math.min(100, Math.round(event.loaded / event.total * 100)));
      });
      request.addEventListener('load', () => {
        let result;
        try { result = JSON.parse(request.responseText); } catch {
          reject(new Error('接收服务返回了无法确认的结果，请先联系我们核实，避免重复发送。')); return;
        }
        if (request.status >= 200 && request.status < 300 && result.success === true &&
            typeof result.submission?.hashId === 'string' && result.submission.hashId) {
          resolve(result);
        } else reject(new Error(responseError(request.status, result)));
      });
      request.addEventListener('error', () => reject(new Error('网络连接中断，无法确认是否收到，请先联系我们核实。')));
      request.addEventListener('timeout', () => reject(new Error('等待接收确认超时，请先联系我们核实，避免重复发送。')));
      request.addEventListener('abort', () => reject(new Error('发送已中断，无法确认接收结果。')));
      request.send(formData);
    });
  }
  const api = Object.freeze({ MAX_BYTES, validFormId, selectFiles, send });
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.VelavSubmission = api;
})(typeof window !== 'undefined' ? window : globalThis);
