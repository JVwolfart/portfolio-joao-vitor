const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <link rel="stylesheet" href="style.css">
  <footer class="rodape">
        <div class="rodape-imagens">
            <div class="rodape-img alura">
                <img src="img/Logo Alura Include.png" alt="Alura Include">
            </div>
            <div class="rodape-img zenvia">
                <img src="img/zenvia.png" alt="Zenvia">
            </div>
        </div>
        <div></div>
        <p>Desenvolvido por <span>João Vitor</span> no programa <span>Alura Include</span></p>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);