class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: var(--cyber-gray);
          border-top: 1px solid rgba(0, 245, 212, 0.2);
}
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        .footer-links a:hover {
          color: #4f46e5;
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <a href="/" class="flex items-center space-x-2">
              <i data-feather="shield" class="text-cyber-teal"></i>
              <span class="text-lg font-semibold text-white" style="font-family: var(--font-family)">CyberLink Sentinel</span>
</a>
            <p class="text-gray-400 mt-2">Advanced threat protection since 2023</p>
</div>
            <div class="footer-links flex