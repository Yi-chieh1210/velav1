'use strict';
const $ = (s, scope = document) => scope.querySelector(s);
const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];
const categories = {
 film: { title: '让故事，<em>开始流动。</em>', label: 'FILM & MOTION / 影像与宣传片', description: '从第一束光到最后一帧，让产品、品牌和想法拥有自己的节奏。探索画面气质，再一起构思你的故事。', deliverables: ['品牌宣传片', '产品介绍', '活动预告', '动态视觉'] },
 web: { title: '每次点击，<em>都有回响。</em>', label: 'WEB & EXPERIENCE / 网站制作', description: '网站不止是一张名片。用清楚的信息、恰好的交互与一致的视觉，让别人愿意留下来了解你。', deliverables: ['品牌官网', '个人作品集', '产品展示页', '交互原型'] },
 visual: { title: '一眼看见，<em>一直记得。</em>', label: 'VISUAL & IDENTITY / 视觉设计', description: '让色彩、字形和构图说同一种语言。从一次传播到一个品牌，把你的气质留在每个细节里。', deliverables: ['品牌视觉', '活动海报', '社交配图', '视觉系统'] }
};
const works = [
 {id:'orbit',category:'film',title:'ORBIT / 光的轨迹',subtitle:'品牌片头 · 星际光学',tags:['黑金','科技','电影感'],keywords:['宇宙','星际','未来','镜头','科幻','科技','高级','黑金','奢华','luxury','space','tech','film','视频','宣传片','品牌','影像','产品','黑色','冷色'],description:'从暗处的一束光开始，让金属、轨道与镜头依次显现。这是一段关于“聚焦”的品牌片头视觉实验。',direction:'黑金对比、缓慢推进的镜头与克制的高光。先建立空间，再揭示品牌，让最后一帧留下记忆。',use:'适合科技产品、创意工作室或品牌发布的片头方向。可进一步发展为分镜、三维动画与音效设计。',art:'orbit'},
 {id:'slow',category:'film',title:'SLOW / 留住片刻',subtitle:'生活方式 · 胶片叙事',tags:['温暖','胶片','自然'],keywords:['咖啡','餐饮','生活','温暖','暖色','胶片','复古','日常','自然','安静','柔和','人文','coffee','warm','film','宣传片','视频','影像','棕色'],description:'窗边的光、慢慢升起的热气，以及一次短暂的停留。以温暖的日常物件，练习更有呼吸感的画面。',direction:'琥珀色调、自然侧光、颗粒质感和留白。镜头围绕触感与生活细节展开，节奏轻缓而亲近。',use:'适合咖啡馆、餐饮、生活方式品牌的故事短片。可围绕实际门店与产品制定拍摄方案。',art:'slow'},
 {id:'atlas',category:'web',title:'ATLAS / 探索界面',subtitle:'产品网站 · 冷感科技',tags:['科技','极简','冷色'],keywords:['科技','极简','冷色','蓝色','未来','产品','软件','网站','官网','界面','数字','交互','saas','tech','web','简洁','克制','ai'],description:'把复杂的信息放进清晰的网格里。以轨道和数据面板为视觉线索，探索一套冷静、清楚的产品展示界面。',direction:'深蓝底色、细线网格、简洁排版和层级明确的按钮。关键动作突出，细节在探索时逐渐显现。',use:'适合软件、数字产品或技术品牌的展示网站。可扩展产品说明、功能演示和联系入口。',art:'atlas'},
 {id:'forma',category:'web',title:'FORMA / 安静的陈列',subtitle:'品牌网站 · 编辑式留白',tags:['极简','温暖','自然'],keywords:['极简','温暖','自然','留白','奶油','米色','建筑','家具','设计','作品集','品牌','网站','官网','简洁','安静','warm','web','editorial'],description:'让作品本身成为主角。以建筑般的网格、柔和的米色和大面积留白，构想一个安静而有秩序的品牌网站。',direction:'纸感底色、衬线标题、自然光影与编辑式排版。页面呼吸感充分，让浏览成为缓慢的发现。',use:'适合设计师、建筑事务所、家居或生活方式品牌。可加入项目详情、品牌故事和预约咨询。',art:'forma'},
 {id:'aura',category:'visual',title:'AURA / 凝光',subtitle:'品牌海报 · 金属质感',tags:['黑金','极简','高级'],keywords:['黑金','高级','奢华','金属','黑色','金色','极简','海报','品牌','视觉','香水','珠宝','产品','luxury','poster','visual'],description:'以一枚悬浮的金属环为视觉锚点，让光成为画面的主角。探索高对比、少元素的品牌海报语言。',direction:'深黑背景、香槟金边缘光与精确的字距。用材质和比例建立质感，而不依赖复杂装饰。',use:'适合高端产品发布、品牌主视觉、活动邀请与社交传播，可延展为一套统一的视觉物料。',art:'aura'},
 {id:'afterlight',category:'visual',title:'AFTERLIGHT / 余光',subtitle:'艺术海报 · 光谱实验',tags:['艺术','冷色','实验'],keywords:['艺术','实验','海报','视觉','活动','展览','音乐','渐变','紫色','蓝色','冷色','先锋','年轻','poster','art','visual'],description:'当光穿过不同的介质，色彩和轮廓开始发生变化。以光谱叠加与大字排版，探索更自由的艺术表达。',direction:'冷紫与冰蓝的交叠、半透明结构和大胆字形。画面具有张力，同时保持内容的可读性。',use:'适合展览、音乐活动、创意发布或文化项目。可按主题发展出海报、动态视觉和社交系列。',art:'afterlight'}
];
function art(key, id='a') {
 const prefix=`${id}-${key}`;
 const common=`<defs><linearGradient id="${prefix}-gold" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#67513b"/><stop offset=".38" stop-color="#e6d1ad"/><stop offset=".62" stop-color="#8c6c48"/><stop offset="1" stop-color="#f8e5c5"/></linearGradient><radialGradient id="${prefix}-halo"><stop stop-color="#c8a472" stop-opacity=".4"/><stop offset="1" stop-color="#c8a472" stop-opacity="0"/></radialGradient><linearGradient id="${prefix}-blue" x2="1" y2="1"><stop stop-color="#b3ddf0"/><stop offset=".5" stop-color="#557aaf"/><stop offset="1" stop-color="#8c78c1"/></linearGradient></defs>`;
 const wrap=x=>`<svg viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${works.find(w=>w.art===key)?.title||'概念画面'}">${common}${x}</svg>`;
 if(key==='orbit')return wrap(`<rect width="720" height="480" fill="#0b1018"/><circle class="art-light" cx="370" cy="235" r="220" fill="url(#${prefix}-halo)"/><g class="art-orbit" fill="none" stroke="url(#${prefix}-gold)"><ellipse cx="360" cy="235" rx="195" ry="83" transform="rotate(-32 360 235)"/><ellipse cx="360" cy="235" rx="172" ry="120" transform="rotate(35 360 235)" stroke-opacity=".5"/><circle cx="360" cy="235" r="104" stroke-width="2"/><circle cx="360" cy="235" r="88" stroke-opacity=".4"/><circle cx="360" cy="235" r="61" stroke-width="14" stroke-opacity=".3"/></g><path d="m313 187 47 97 48-97" fill="none" stroke="url(#${prefix}-gold)" stroke-width="7"/><circle cx="523" cy="137" r="5" fill="#eed7b0"/><path d="M120 364h480" stroke="#b3956555"/><text x="360" y="400" text-anchor="middle" fill="#b7ac99" font-family="Georgia,serif" font-size="12" letter-spacing="13">O R B I T</text>`);
 if(key==='slow')return wrap(`<rect width="720" height="480" fill="#3b2f29"/><path d="M0 0h430L70 480H0Z" fill="#d2ae7930"/><path d="M220 0h100L0 450V265Z" fill="#f6d39b18"/><rect x="70" y="70" width="235" height="300" fill="#9b785121"/><path d="M170 70v300M70 220h235" stroke="#201e1c" stroke-width="10"/><ellipse cx="440" cy="366" rx="135" ry="24" fill="#151b1d80"/><ellipse cx="430" cy="354" rx="103" ry="19" fill="#a18a6b"/><path d="M352 224h151l-15 111q-60 40-121-2Z" fill="#cec0a8"/><ellipse cx="428" cy="224" rx="76" ry="19" fill="#f1e0c0"/><ellipse cx="428" cy="224" rx="65" ry="12" fill="#4d3324"/><path d="M500 242q68-5 42 54-10 20-45 15" fill="none" stroke="#b0a087" stroke-width="14"/><g class="art-light" fill="none" stroke="#dfd1bc" stroke-opacity=".35" stroke-width="3"><path d="M405 196q-28-30 0-60t0-55"/><path d="M447 185q24-30 0-60"/></g><text x="90" y="410" fill="#e5d5bc" font-family="Georgia,serif" font-size="26" letter-spacing="7">SLOW.</text><text x="90" y="436" fill="#bda78e" font-family="sans-serif" font-size="8" letter-spacing="3">A MOMENT TO STAY</text>`);
 if(key==='atlas')return wrap(`<rect width="720" height="480" fill="#0b1624"/><g stroke="#7199b614" fill="none">${[80,160,240,320,400,480,560,640].map(x=>`<path d="M${x} 0v480"/>`).join('')}${[80,160,240,320,400].map(y=>`<path d="M0 ${y}h720"/>`).join('')}</g><rect x="88" y="72" width="544" height="338" rx="8" fill="#101e2e" stroke="#7194b870"/><path d="M88 108h544" stroke="#7194b840"/><g fill="#8aa5bd"><circle cx="106" cy="90" r="2"/><circle cx="116" cy="90" r="2"/><circle cx="126" cy="90" r="2"/></g><text x="127" y="152" fill="#c3d3e1" font-size="11" font-family="sans-serif" letter-spacing="3">ATLAS</text><text x="127" y="215" fill="#e0e8ee" font-size="32" font-family="sans-serif">A new</text><text x="127" y="252" fill="#e0e8ee" font-size="32" font-family="sans-serif">perspective.</text><path d="M127 278h134m-134 10h105" stroke="#7f96a4" stroke-width="2"/><rect x="127" y="315" width="100" height="28" fill="#9bc2db"/><text x="141" y="333" fill="#152331" font-size="8" font-family="sans-serif" letter-spacing="1">EXPLORE ↗</text><g class="art-orbit" stroke="url(#${prefix}-blue)" fill="none"><ellipse cx="470" cy="247" rx="95" ry="72"/><ellipse cx="470" cy="247" rx="42" ry="100" transform="rotate(35 470 247)"/><circle cx="470" cy="247" r="28" fill="#a7cdeb0a"/></g><rect x="382" y="352" width="81" height="28" fill="#152b40" stroke="#7194b830"/><rect x="476" y="352" width="105" height="28" fill="#152b40" stroke="#7194b830"/>`);
 if(key==='forma')return wrap(`<rect width="720" height="480" fill="#bdb5a7"/><path d="M0 0h300L0 480Z" fill="#ffffff25"/><rect x="78" y="58" width="566" height="365" fill="#eae5db"/><text x="109" y="100" fill="#3c3d37" font-family="Georgia,serif" font-size="22">forma.</text><path d="M470 95h35m15 0h35m15 0h35M109 120h503" stroke="#8f918780"/><text x="110" y="184" fill="#343b37" font-family="Georgia,serif" font-size="29">Less,</text><text x="110" y="218" fill="#343b37" font-family="Georgia,serif" font-size="29">but considered.</text><path d="M110 250h140m-140 11h120m-120 11h100" stroke="#9c9d94" stroke-width="2"/><text x="110" y="324" fill="#545f51" font-family="sans-serif" font-size="9" letter-spacing="1">DISCOVER THE COLLECTION →</text><rect x="366" y="148" width="241" height="211" fill="#cec6b6"/><path d="M366 148h164L366 359Z" fill="#f7efd333"/><ellipse cx="491" cy="327" rx="75" ry="13" fill="#6c6d5c20"/><path d="M450 317V214q40-44 80 0v103Z" fill="#9e9c85"/><path d="M463 317v-97q27-30 54 0v97" fill="#c4bba3"/><path d="M109 384h498" stroke="#a9ab9c70"/><text x="109" y="403" fill="#7b8177" font-family="sans-serif" font-size="7" letter-spacing="2">OBJECTS / SPACE / INTENTION</text>`);
 if(key==='aura')return wrap(`<rect width="720" height="480" fill="#0d0e10"/><circle class="art-light" cx="360" cy="250" r="200" fill="url(#${prefix}-halo)"/><text x="360" y="100" text-anchor="middle" fill="#d9c5a5" font-family="Georgia,serif" font-size="38" letter-spacing="18">AURA</text><g class="art-orbit" transform="rotate(-28 360 255)"><ellipse cx="360" cy="255" rx="103" ry="126" stroke="url(#${prefix}-gold)" fill="none" stroke-width="26"/><ellipse cx="356" cy="253" rx="92" ry="121" stroke="#fff1cf88" fill="none" stroke-width="1"/></g><ellipse cx="360" cy="401" rx="107" ry="9" fill="#d9c5a513"/><text x="360" y="438" text-anchor="middle" fill="#a7957b" font-family="sans-serif" font-size="8" letter-spacing="6">THE SHAPE OF LIGHT</text>`);
 return wrap(`<rect width="720" height="480" fill="#141425"/><g class="art-orbit" fill="none" stroke="url(#${prefix}-blue)">${[0,1,2,3,4,5,6].map((n)=>`<ellipse cx="360" cy="235" rx="${80+n*15}" ry="${143-n*9}" stroke-width="${18-n*2}" opacity="${.8-n*.07}" transform="rotate(${n*18-45} 360 235)"/>`).join('')}</g><text x="58" y="91" fill="#eeeaf4" font-family="sans-serif" font-size="38" font-weight="200" letter-spacing="2">AFTER</text><text x="58" y="135" fill="#eeeaf4" font-family="sans-serif" font-size="38" font-weight="200" letter-spacing="2">LIGHT.</text><path d="M58 405h604" stroke="#9e9dca66"/><text x="58" y="435" fill="#b9b8d9" font-family="sans-serif" font-size="9" letter-spacing="3">AN EXPERIMENT IN PERCEPTION</text><text x="625" y="435" fill="#b9b8d9" font-family="sans-serif" font-size="9">06</text>`);
}
let saved=[];try{saved=JSON.parse(localStorage.getItem('velav1-saved')||'[]');if(!Array.isArray(saved))saved=[];saved=[...new Set(saved)].filter(id=>works.some(w=>w.id===id));}catch{saved=[];}
let currentWork=null, currentFilter='all', query='', toastTimer;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2800);}
function updateSaved(){try{localStorage.setItem('velav1-saved',JSON.stringify(saved));}catch{}$$('[data-count]').forEach(el=>el.textContent=saved.length);$$('[data-save]').forEach(el=>{let yes=saved.includes(el.dataset.save);el.textContent=yes?'✓':'+';el.setAttribute('aria-pressed',yes);el.setAttribute('aria-label',`${yes?'取消收藏':'收藏'} ${works.find(w=>w.id===el.dataset.save).title}`);});if(currentWork){$('#save-work').textContent=saved.includes(currentWork.id)?'已在清单中 · 点击移除 ✓':'加入项目清单 +';}renderSaved();}
function toggleSave(id){invalidateBrief();if(saved.includes(id)){saved=saved.filter(x=>x!==id);toast('已从项目清单移除');}else{saved.push(id);toast('已加入项目清单，右上角可以查看');}updateSaved();}
function renderCards(list,target,prefix){target.replaceChildren();list.forEach(w=>{let article=document.createElement('article');article.className='work-card';article.innerHTML=`<button class="work-open" data-work="${w.id}" aria-label="查看 ${w.title}"><div class="work-visual">${art(w.art,prefix)}<span class="work-label">${w.category.toUpperCase()} / CONCEPT</span></div></button><div class="work-info"><div><h3>${w.title}</h3><p>${w.subtitle}</p></div><button class="save-small" data-save="${w.id}" aria-label="收藏 ${w.title}" aria-pressed="false">+</button></div>`;target.append(article);});updateSaved();}
function showModal(dialog){dialog.showModal();document.body.classList.add('modal-open');}
function openWork(id){currentWork=works.find(w=>w.id===id);if(!currentWork)return;$('#detail-type').textContent=categories[currentWork.category].label;$('#detail-art').innerHTML=art(currentWork.art,'detail');$('#detail-art').classList.remove('preview-playing');$('#work-title').textContent=currentWork.title;$('#work-description').textContent=currentWork.description;$('#detail-direction').textContent=currentWork.direction;$('#detail-use').textContent=currentWork.use;$('#detail-tags').replaceChildren(...currentWork.tags.map(tag=>{let e=document.createElement('span');e.textContent=tag;return e;}));$('#motion-controls').hidden=currentWork.category!=='film';$('#play-preview').textContent='播放动效预览 ▶';updateSaved();showModal($('#work-dialog'));}
function renderSaved(){const target=$('#saved-works');target.replaceChildren();target.hidden=!saved.length;if(!saved.length)return;saved.forEach(id=>{const w=works.find(x=>x.id===id);let div=document.createElement('div');div.className='saved-item';div.innerHTML=`<span>${w.title}<small>${w.tags.join(' / ')} · 概念参考</small></span><button data-remove="${w.id}" aria-label="移除 ${w.title}">移除 ×</button>`;target.append(div);});}
function openBrief(){if($('#work-dialog').open)$('#work-dialog').close();renderSaved();showModal($('#brief-dialog'));}
function tokensFor(text){return text.toLowerCase().split(/[\s，。！？、,;；/]+/).filter(Boolean);}
function searchWorks(){const lower=query.toLowerCase().trim();const filtered=works.filter(w=>currentFilter==='all'||w.category===currentFilter);let scored=filtered.map(w=>({w,score:lower?w.keywords.filter(k=>lower.includes(k)).length+w.tags.filter(t=>lower.includes(t)).length:1}));if(lower)scored=scored.filter(r=>r.score>0).sort((a,b)=>b.score-a.score);renderCards(scored.map(r=>r.w),$('#search-grid'),'search');$('#empty-state').hidden=!!scored.length;$('#search-status').textContent=lower?`找到 ${scored.length} 个相关方向 · 点击查看创作思路，或加入项目清单`:`浏览 ${scored.length} 个概念方向 · 选择喜欢的作品，再一起细化`;$$('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.filter===currentFilter));}
function route(){let name=location.hash.replace(/^#\/?/,'').split('/')[0];if(name==='services'){if($('#home-view').hidden){$('#home-view').hidden=false;$('#gallery-view').hidden=true;$('#discover-view').hidden=true;}$('#services').scrollIntoView({behavior:motionOff?'auto':'smooth'});return;}const home=!categories[name]&&name!=='discover';$('#home-view').hidden=!home;$('#gallery-view').hidden=!categories[name];$('#discover-view').hidden=name!=='discover';$$('[data-nav]').forEach(a=>{if(a.dataset.nav===(home?'home':name))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});$('#mobile-nav').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false');$('#menu-toggle').setAttribute('aria-label','打开导航');if(categories[name]){const c=categories[name];$('#gallery-title').innerHTML=c.title;$('#gallery-eyebrow').textContent=c.label;$('#gallery-description').textContent=c.description;$('#gallery-deliverables').innerHTML=c.deliverables.map(x=>`<span>${x}</span>`).join('');renderCards(works.filter(w=>w.category===name),$('#gallery-grid'),'gallery');document.title=c.label.split(' / ')[1]+' — VELAV';}else if(name==='discover'){searchWorks();document.title='寻找你的风格 — VELAV';}else document.title='VELAV — Vision in Motion';window.scrollTo({top:0,behavior:'instant'});}
document.addEventListener('click',e=>{const w=e.target.closest('[data-work]'),s=e.target.closest('[data-save]'),r=e.target.closest('[data-remove]');if(w)openWork(w.dataset.work);if(s)toggleSave(s.dataset.save);if(r)toggleSave(r.dataset.remove);if(e.target.closest('[data-open-brief]'))openBrief();if(e.target.closest('.close-dialog'))e.target.closest('dialog').close();});
$$('dialog').forEach(d=>{d.addEventListener('close',()=>{if(!$$('dialog').some(x=>x.open))document.body.classList.remove('modal-open');$('#detail-art').classList.remove('preview-playing');});d.addEventListener('click',e=>{const rect=d.getBoundingClientRect();if(e.target===d&&(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom))d.close();});});
$('#save-work').addEventListener('click',()=>currentWork&&toggleSave(currentWork.id));
$('#menu-toggle').addEventListener('click',()=>{let open=$('#mobile-nav').hidden;$('#mobile-nav').hidden=!open;$('#menu-toggle').setAttribute('aria-expanded',open);$('#menu-toggle').setAttribute('aria-label',open?'关闭导航':'打开导航');});
$('#style-form').addEventListener('submit',e=>{e.preventDefault();query=$('#style-query').value.trim();searchWorks();});
$$('[data-query]').forEach(b=>b.addEventListener('click',()=>{query=b.dataset.query;$('#style-query').value=query;searchWorks();}));
$$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{currentFilter=b.dataset.filter;query=$('#style-query').value.trim();searchWorks();}));
$('#clear-search').addEventListener('click',()=>{query='';currentFilter='all';$('#style-query').value='';searchWorks();});
$('#use-query').addEventListener('click',()=>{if(query)$('#brief-idea').value=query;openBrief();});
// Files are sent only after the customer clicks the submit button.
const attachmentLimits = { total: 25 * 1024 * 1024 };
let attachments = [], submissionPending = false;
function fileSize(bytes){return bytes < 1024 * 1024 ? `${Math.ceil(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(2)} MB`;}
function invalidateBrief(){$('#brief-result').hidden=true;}
function renderAttachments(){
  const list=$('#attachment-list');list.replaceChildren();
  attachments.forEach((file,index)=>{
    const row=document.createElement('li'),text=document.createElement('span'),name=document.createElement('strong'),detail=document.createElement('small'),remove=document.createElement('button');
    name.textContent=file.name;detail.textContent=`${fileSize(file.size)} · 待提交`;
    text.append(name,detail);remove.type='button';remove.disabled=submissionPending;remove.textContent='移除 ×';remove.setAttribute('aria-label',`移除附件 ${file.name}`);
    remove.addEventListener('click',()=>{if(submissionPending)return;attachments.splice(index,1);renderAttachments();invalidateBrief();$('#attachment-status').textContent='已移除附件。';});
    row.append(text,remove);list.append(row);
  });
  const total=attachments.reduce((sum,file)=>sum+file.size,0);
  $('#attachment-total').textContent=`已选 ${attachments.length} 个文件 · ${(total/1024/1024).toFixed(2)} / 25 MB`;
}
function addAttachments(files){
  if(submissionPending)return;
  const result=VelavSubmission.selectFiles(attachments,Array.from(files));
  if(result.error){$('#attachment-status').textContent=result.error;return;}
  attachments=result.files;renderAttachments();invalidateBrief();
  $('#attachment-status').textContent=result.added?`已添加 ${result.added} 个文件，点击「发送项目需求」后才会上传。`:'所选文件已在清单中，无需重复添加。';
}
$('#choose-attachments').addEventListener('click',()=>$('#brief-files').click());
$('#brief-files').addEventListener('change',e=>{addAttachments(e.target.files);e.target.value='';});
const dropzone=$('#attachment-dropzone');let dragDepth=0;
dropzone.addEventListener('dragenter',e=>{e.preventDefault();dragDepth++;dropzone.classList.add('drag-over');});
dropzone.addEventListener('dragover',e=>{e.preventDefault();if(e.dataTransfer)e.dataTransfer.dropEffect='copy';});
dropzone.addEventListener('dragleave',()=>{if(--dragDepth<=0){dragDepth=0;dropzone.classList.remove('drag-over');}});
dropzone.addEventListener('drop',e=>{e.preventDefault();dragDepth=0;dropzone.classList.remove('drag-over');if(e.dataTransfer)addAttachments(e.dataTransfer.files);});
// Prevent a misplaced file drop from navigating away and losing the brief.
for(const event of ['dragover','drop'])window.addEventListener(event,e=>{if(Array.from(e.dataTransfer?.types||[]).includes('Files'))e.preventDefault();});
function syncDeadline(){
  const enabled=$('#brief-time').value==='指定日期之前',date=$('#brief-date');
  const now=new Date(),pad=n=>String(n).padStart(2,'0');
  date.min=`${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
  date.disabled=!enabled;date.required=enabled;$('#brief-date-field').hidden=!enabled;
}
$('#brief-time').addEventListener('change',syncDeadline);syncDeadline();
$('#brief-form').addEventListener('input',invalidateBrief);
$('#brief-form').addEventListener('change',invalidateBrief);
function buildBriefText(){
  const deadline=$('#brief-time').value==='指定日期之前'?`${$('#brief-date').value||'待确定日期'} 之前`:$('#brief-time').value;
  return ['你好，我想聊一个项目。','',`称呼：${$('#brief-name').value.trim()||'未填写'}`,`联系方式：${$('#brief-contact').value.trim()||'未填写'}`,`服务方向：${$('#brief-service').value}`,`预算范围：${$('#brief-budget').value}`,`期望时间：${deadline}`,'',`我的想法：${$('#brief-idea').value.trim()||'想先聊聊，一起确定方向。'}`,'','喜欢的概念参考：',...(saved.length?saved.map(id=>{const w=works.find(x=>x.id===id);return `• ${w.title}（${w.tags.join('、')}）`;}):['暂未选择']),'','参考附件清单（文本不包含文件本身）：',...(attachments.length?attachments.map(file=>`• ${file.name.replace(/[\r\n]/g,' ')}（${fileSize(file.size)}）`):['暂未添加']),'','参考站点：https://yi-chieh1210.github.io/velav1/'].join('\n');
}
$('#preview-brief').addEventListener('click',()=>{
  $('#brief-output').value=buildBriefText();$('#brief-result').hidden=false;$('#brief-result').scrollIntoView({behavior:motionOff?'auto':'smooth',block:'nearest'});
});
const configuredFormId=window.VELAV_FORMINIT?.formId||'';
const submissionReady=VelavSubmission.validFormId(configuredFormId);
$('#send-brief').disabled=!submissionReady;
if(submissionReady)$('#submission-status').textContent='提交成功后会显示确认编号。刷新页面前请先完成提交，或复制简介保存。';
function setSubmissionBusy(busy){
  submissionPending=busy;
  $$('#brief-form input,#brief-form select,#brief-form textarea,#brief-form button').forEach(el=>el.disabled=busy);
  if(!busy){syncDeadline();$('#send-brief').disabled=!submissionReady;}
  $('#choose-attachments').disabled=busy;$('#brief-files').disabled=busy;renderAttachments();
  $('#brief-form').setAttribute('aria-busy',String(busy));
  $('#send-brief').textContent=busy?'正在发送，请稍候…':'发送项目需求 ↗';
}
$('#brief-form').addEventListener('submit',async e=>{
  e.preventDefault();if(submissionPending)return;
  syncDeadline();if(!e.target.reportValidity())return;
  const status=$('#submission-status');
  if(!submissionReady){status.textContent='在线提交尚未启用，请通过微信 jay5vae 联系。';return;}
  if(!$('#brief-contact').value.trim()||!$('#brief-idea').value.trim()){status.textContent='请填写联系方式和需求描述，不能只填空格。';return;}
  if($('#brief-website').value){status.textContent='表单校验未通过，请刷新后重新填写。';return;}
  const validation=VelavSubmission.selectFiles([],attachments);
  if(validation.error){status.textContent=validation.error;return;}
  const summary=buildBriefText(),payload=new FormData();
  if($('#brief-name').value.trim())payload.append('fi-sender-fullName',$('#brief-name').value.trim());
  payload.append('fi-text-contact',$('#brief-contact').value.trim());
  payload.append('fi-text-project',summary);
  payload.append('_gotcha','');
  for(const file of attachments)payload.append('fi-file-attachments[]',file,file.name);
  setSubmissionBusy(true);status.dataset.state='pending';status.textContent='正在上传需求和附件，请保持页面打开…';
  const progress=$('#submission-progress');progress.hidden=false;progress.value=0;
  try{
    const result=await VelavSubmission.send(configuredFormId,payload,percent=>{progress.value=percent;status.textContent=percent<100?`正在上传 ${percent}%…`:'上传完成，正在等待接收确认…';});
    const receipt=result.submission.hashId;
    e.target.reset();attachments=[];$('#brief-files').value='';$('#attachment-status').textContent='';invalidateBrief();
    status.dataset.state='success';status.textContent=`需求已成功提交。确认编号：${receipt}。我们会通过你留下的联系方式与你沟通。`;
    toast('项目需求已提交');
  }catch(error){
    status.dataset.state='error';status.textContent=error.message+' 你的填写内容和附件仍保留在本页，也可复制简介后通过微信 jay5vae 联系。';
  }finally{setSubmissionBusy(false);progress.hidden=true;}
});
async function copyText(text,fallback){try{await navigator.clipboard.writeText(text);toast('已复制');}catch{if(fallback){fallback.focus();fallback.select();toast('浏览器未允许复制，文字已选中，请手动复制');}else toast('请手动复制微信号：jay5vae');}}
$('#copy-wechat').addEventListener('click',()=>copyText('jay5vae'));$('#copy-brief').addEventListener('click',()=>copyText($('#brief-output').value,$('#brief-output')));
$('#download-brief').addEventListener('click',()=>{let url=URL.createObjectURL(new Blob(['\ufeff'+$('#brief-output').value],{type:'text/plain;charset=utf-8'}));let a=document.createElement('a');a.href=url;a.download='VELAV-项目简介.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('项目简介已下载');});
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');let motionOff=motionPreference.matches;
function setMotion(off){motionOff=off;document.documentElement.classList.toggle('motion-off',off);$('#motion-toggle').textContent=off?'▷':'Ⅱ';$('#motion-toggle').setAttribute('aria-pressed',off);$('#motion-toggle').setAttribute('aria-label',off?'开启背景动效':'暂停背景动效');}
setMotion(motionOff);$('#motion-toggle').addEventListener('click',()=>{setMotion(!motionOff);if(motionOff){$('#detail-art').classList.remove('preview-playing');$('#play-preview').textContent='播放动效预览 ▶';}toast(motionOff?'背景动效已暂停':'背景动效已开启');});
$('#play-preview').addEventListener('click',()=>{if(motionOff||motionPreference.matches){toast('当前为减少动态模式，显示静态画面');return;}let playing=$('#detail-art').classList.toggle('preview-playing');$('#play-preview').textContent=playing?'暂停动效 Ⅱ':'播放动效预览 ▶';});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});
$$('#home-view .section-heading,#home-view .service-grid,#home-view .philosophy-grid').forEach(e=>{e.classList.add('reveal');observer.observe(e);});
renderCards([works[0],works[2],works[4],works[1]],$('#featured-grid'),'featured');window.addEventListener('hashchange',route);route();
const canvas=$('#stars'),ctx=canvas.getContext('2d');let stars=[],cw=0,ch=0,last=0;
function resizeStars(){const box=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);cw=box.width;ch=box.height;canvas.width=cw*dpr;canvas.height=ch*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:innerWidth<760?30:65},()=>({x:Math.random()*cw,y:Math.random()*ch*.65,r:Math.random()*.9+.2,s:Math.random()*.3+.2,phase:Math.random()*6.28}));}
resizeStars();window.addEventListener('resize',resizeStars);function draw(t){requestAnimationFrame(draw);if(motionOff||document.hidden||$('#home-view').hidden||scrollY>ch||t-last<45)return;last=t;ctx.clearRect(0,0,cw,ch);for(const star of stars){ctx.beginPath();ctx.fillStyle=`rgba(238,218,183,${.2+.35*(1+Math.sin(t*.0005*star.s+star.phase))})`;ctx.arc(star.x,star.y,star.r,0,Math.PI*2);ctx.fill();}}requestAnimationFrame(draw);
