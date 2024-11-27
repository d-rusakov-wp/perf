class Scale extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const scale = document.createElement("div");

    shadow.appendChild(scale);

    const style = this.renderCSS();

    shadow.appendChild(style);
  }

  renderCSS() {
    const style = document.createElement("style");

    style.textContent = /* CSS */ `
      :host {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        border-radius: 0.125rem;
        color: #fff;
        border: 3px solid #222 !important;

        &::before {
          transform: translateX(calc(-100% - 15px));
          content: '${this.getAttribute("name")}';
          z-index: 1;
          font: normal 400 24px/1 "Arsenal";
        }

        &::after {
          position: absolute;
          left: 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 5px;
          border-radius: 0.125rem;
          font-size: 12px;
          content: '${this.getAttribute("winner") ? "✅" : ""}';
          width: ${this.getAttribute("percentage")}%;
          background: #b3441e;
          background: repeating-linear-gradient(-45deg, #b3441e, #b3441e 5px, #0000 5px, #0000 10px);
        }
      }
    `;

    return style;
  }
}

function init() {
  customElements.define("custom-scale", Scale);
}

document.addEventListener("DOMContentLoaded", init);
