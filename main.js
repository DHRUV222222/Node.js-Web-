// Client-side SPA router
function renderPage(page) {
  const app = document.getElementById('app');
  if (page === 'home') {
    app.innerHTML = '<h2>Home Page</h2><p>This is the home content!</p><button onclick="alert(\'Welcome!\')">Say Hello</button>';
  } else if (page === 'about') {
    app.innerHTML = '<h2>About Page</h2><p>This is a single-page app with client-side routing!</p>';
  } else {
    app.innerHTML = '<h2>404</h2><p>Page not found.</p>';
  }
}

function router() {
  const hash = window.location.hash.replace('#', '');
  renderPage(hash || 'home');
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);