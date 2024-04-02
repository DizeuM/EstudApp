const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

  <style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
    @import url("/src/css/styles.css");
  </style>

  <nav class="container-fluid fixed-top border-bottom border-black border-2 bg-light px-4 ">
    <div class="row text-primary my-2 px-2 d-flex align-items-center">
        
        <div class="col text-center mt-1">
            <h1 class=""><i class="bi bi-sticky-fill" style="font-size: 1.8rem;"></i> EstudApp</h1>
        </div>

    </div>
  </nav>
  
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);