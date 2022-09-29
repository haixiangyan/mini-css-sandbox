function shadowDOMIsolation(contentHtmlString) {
  // 清理 HTML
  contentHtmlString = contentHtmlString.trim();

  // 创建一个容器 div
  const containerElement = document.createElement('div');
  // 生成内容 HTML 结构
  containerElement.innerHTML = contentHtmlString; // content 最高层级必需只有一个 div 元素

  // 获取根 div 元素
  const appElement = containerElement.firstChild;

  const { innerHTML } = appElement;
  // 清空内容，以便后面绑定 shadow DOM
  appElement.innerHTML = '';

  let shadow;

  if (appElement.attachShadow) {
    // 兼容性更广的写法
    shadow = appElement.attachShadow({ mode: 'open' });
  } else {
    // 旧写法
    shadow = appElement.createShadowRoot();
  }

  // 生成 shadow DOM 的内容
  shadow.innerHTML = innerHTML;

  return appElement;
}

// // 测试
// const shadowDOMSection = document.querySelector('#shadow-dom');
//
// const wrappedShadowDOMAppElement = shadowDOMIsolation(`
//   <div class="wrapper">
//     <p>Shadow DOM Isolation</p>
//   </div>
// `);
//
// shadowDOMSection.appendChild(wrappedShadowDOMAppElement);
