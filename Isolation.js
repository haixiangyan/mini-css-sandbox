class Isolation extends HTMLElement {
  constructor() {
    super();

    const name = this.getAttribute('data-app-name');
    const mode = this.getAttribute('data-isolation-mode');

    const html = `<div class="wrapper">${this.innerHTML.trim()}</div>`;

    // 根据隔离模式来生成对应的 appElement
    const appElement = mode === 'shadowDOM' ? shadowDOMIsolation(html) : scopedCSSIsolation(name, html);

    // 清除内容
    this.innerHTML = '';

    // 再追加包裹的内容
    this.appendChild(appElement);
  }
}

customElements.define('isolation-content', Isolation)
