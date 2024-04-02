const menuTemplate = document.createElement('template');

menuTemplate.innerHTML = `
  <style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
    @import url("/src/css/styles.css");
  </style>
  
  <nav class="container-fluid text-center fixed-bottom border-top border-black border-2 bg-light">

    <div class="row justify-content-around py-2">

        <div onclick="location.href='/src/pages/index.html';" class="col-3">
            <div class="text-primary">
                <i class="bi bi-house-fill" style="font-size: 1.8rem;"></i>
                <h6>Home</h6>
            </div>
        </div>
        
        <div onclick="location.href='/src/pages/buscar/buscar.html';"class="col-3">
            <div class="text-primary">
                <i class="bi bi-search" style="font-size: 1.8rem;"></i>
                <h6>Buscar</h6>
            </div>
        </div>

        <div onclick="location.href='/src/pages/calendario/calendario.html';"class="col-3">
            <div class="text-primary">
                <i class="bi bi-calendar-day-fill" style="font-size: 1.8rem;"></i>
                <h6>Calen...</h6>
            </div>
        </div>

        <div onclick="location.href='/src/pages/ajustes/ajustes.html';" style="cursor: pointer;" class="col-3">
            <div class="text-primary">
                <i class="bi bi-toggles" style="font-size: 1.8rem;"></i>
                <h6>Ajustes</h6>
            </div>
        </div>
          
    </div>

  </nav>
  
`;

class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(menuTemplate.content);
  }
}

customElements.define('menu-component', Menu);