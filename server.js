// Pure Node.js static file server for SPA
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript'
};

http.createServer((req, res) => {
  let filePath = 'public' + req.url;
  if (filePath === 'public/' || filePath === 'public') filePath = 'public/index.html';
  const ext = path.extname(filePath);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<h1>404 Not Found</h1>');
    } else {
      res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'text/plain'});
      res.end(content, 'utf-8');
    }
  });
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});