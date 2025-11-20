class BackButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: var(--cyber-gray);
          color: var(--cyber-teal);
          border: 1px solid var(--cyber-teal);
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .back-btn:hover {
          background-color: rgba(0, 245, 212, 0.1);
        }
      </style>
      <a href="menu.html" class="back-btn">
<i data-feather="arrow-left"></i>
        Volver al inicio
      </a>
`;
  }
}
customElements.define('back-button', BackButton);