class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: var(--cyber-gray);
          box-shadow: 0 0 10px rgba(0, 245, 212, 0.3);
          border-bottom: 1px solid rgba(0, 245, 212, 0.2);
}
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }
        .nav-logo {
          color: var(--cyber-teal);
          font-weight: 700;
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--font-family);
        }
.nav-link {
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        .nav-link:hover {
          color: var(--cyber-teal);
}
      </style>
      <nav>
        <div class="nav-container flex items-center justify-between">
          <a href="/" class="flex items-center space-x-2">
            <i data-feather="shield"></i>
            <span class="nav-logo">LinkGuardian</span>
          </a>
          <div class="flex items-center space-x-6">
          <a href="menu.html" class="nav-link text-gray-700 hover:text-indigo-600 transition">Inicio</a>
<a href="#" class="nav-link text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#" class="nav-link text-gray-700 hover:text-indigo-600 transition">FAQ</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);