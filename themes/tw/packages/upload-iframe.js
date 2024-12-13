function init() {
  const uploadIframeBtn = document.querySelector("#upload-iframe-btn");
  const uploadIframe = document.querySelector("#upload-iframe");
  const link = uploadIframeBtn.dataset.link;

  if (!uploadIframeBtn || uploadIframe) return;

  uploadIframeBtn.addEventListener(
    "click",
    () => {
      uploadIframe.src = link;
      uploadIframe.classList.add("z-10");
    },
    {
      once: true,
    }
  );
}

document.addEventListener("DOMContentLoaded", init);
