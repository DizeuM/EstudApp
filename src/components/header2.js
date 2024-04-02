const header2Template = document.createElement('template');

header2Template.innerHTML = `

  <style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
    @import url("/src/css/styles.css");
  </style>

  <section class="text-center">
    <div class="mb-5 pb-3">.</div>
  </section>
  
  <nav class="container-fluid fixed-top border-bottom border-black border-2 bg-light px-4 ">
    <div class="row text-primary my-2 px-2 d-flex align-items-center">
      
        <div class="col-2 " onclick="history.back()">
            <i class="bi bi-arrow-left-circle-fill" style="font-size: 2rem;"></i>
        </div>

        <div class="col text-end mt-1">
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

    shadowRoot.appendChild(header2Template.content);
  }
}

customElements.define('header2-component', Header);