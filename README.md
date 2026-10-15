# MSME Digital Assistant

A responsive Next.js product showcase for the Windows desktop edition of MSME Digital Assistant. It includes scroll-linked CSS 3D motion, an interactive assistant preview, and vector screen previews based on the supplied workspace screenshots.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before publishing

- Add the real Windows installer links (`.msi` and portable `.exe`) when the release builds are ready.
- Publish valid SHA-256 checksums and signing details with those builds.
- Replace the illustrative workspace records and financial amounts with approved product data.
- The screenshot previews in `public/screenshots` are vector recreations based on the references; replace them with the original image files if exact captures are required.
