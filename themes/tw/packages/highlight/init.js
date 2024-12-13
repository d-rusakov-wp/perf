function check() {
  if (!hljs) {
    console.error("hljs не найден");

    return;
  }
}

function init() {
  hljs.highlightAll();
}

document.addEventListener("DOMContentLoaded", () => {
  check();
  init();
});
