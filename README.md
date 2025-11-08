# Pure Node.js Single Page Application Example

This repository demonstrates a minimal frontend-only Single Page Application (SPA) served via a pure Node.js static file server. No Express or frameworks—just static HTML, CSS, and JavaScript!

## Features

- Pure Node.js static file server (`server.js`)
- Frontend SPA with hash-based client-side routing
- No backend or database
- Minimal, extendable structure

## Folder Structure

```
/server.js
/public/
  index.html
  style.css
  main.js
```

## Usage

1. Clone or download this repository.
2. Install Node.js (if not already installed).
3. Start the server:
    ```bash
    node server.js
    ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- Edit `index.html`, `style.css`, or `main.js` in `/public/` to modify your SPA.
- Extend client-side logic for more pages, features, or interactivity!

## License

MIT