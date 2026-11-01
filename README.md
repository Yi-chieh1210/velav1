# VELAV / Experimental Edition 01

An independent cinematic portfolio concept, inspired by celestial sails, optical lenses and champagne-gold light.

Public preview: https://yi-chieh1210.github.io/velav1/

## Included

- Responsive celestial homepage with optional animated starlight.
- Dedicated film, web and visual galleries using hash routes that work on GitHub Pages.
- Six clearly labelled original concept studies, with detail dialogs and motion experiments.
- Keyword-based style exploration, category filters, shortlist saved in the browser.
- Project inquiries delivered through Forminit, with copy/download fallback and WeChat contact.
- Keyboard access, native dialogs and reduced-motion support.

The examples are concept studies, not client commissions. Motion previews are SVG/CSS experiments, not finished commercial films. Style search matches local keywords and tags; it does not call an AI service.

## Hosting

Static HTML/CSS/JavaScript; no dependencies or build step. GitHub Pages: deploy `main`, root directory. No custom domain, user AWS service, API key or analytics. Forminit is the external form backend; only its public Form ID is in forminit-config.js. Customer data and files are sent directly to Forminit after submission, not stored in this repository. Only shortlisted work IDs are stored in localStorage.

This edition is separate from the existing VELAV website. No CNAME file is included.

To preview locally: `python3 -m http.server 8091 --bind 127.0.0.1` from this folder.

Code and brand artwork are published for viewing; no open-source license is granted.

## Reference attachments

The brief accepts multiple files, up to 25 × 1024 × 1024 bytes combined. Text is separate from this file cap. Formats are restricted to Forminit's documented supported formats, including presentations, spreadsheets, documents, images, video, audio and archives. Both selection and submission validate files; the server applies its own validation. Pending files remain in tab memory until submitted and are lost on refresh.

Forminit setup: Public mode, authorized domain `yi-chieh1210.github.io`, honeypot `_gotcha`. The site sends multipart FormData with `fi-sender-fullName`, `fi-text-contact`, `fi-text-project`, and repeated `fi-file-attachments[]`. It shows success only after a successful JSON response containing a submission receipt. Errors retain the form and files; ambiguous network errors do not auto-retry. Recipient and email workflow are configured privately in Forminit; no API key belongs in this repository.

Free-plan limits at setup: 100 submissions/month and 100 MB total file storage. Monitor quota in Forminit and download/archive files before managing retention. Google Drive storage is not connected. Email notification is an alert; Forminit stores the original submission and attachments. Mainland network reliability requires testing on the customer's actual connection.

Docs: https://forminit.com/docs/file-upload/ and https://forminit.com/pricing/

Budget ranges: ¥30 or below, ¥30–100, ¥100–300, ¥300 and above. Timing includes one week, half a month, one month, three months, or a required specified deadline (today or later).
