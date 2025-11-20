class CyberLoader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .cyber-loader {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 3px solid var(--cyber-teal);
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
      <div class="cyber-loader"></div>
    `;
  }
}
customElements.define('cyber-loader', CyberLoader);