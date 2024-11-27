function stopVideo(video) {
  video.pause();
  video.currentTime = 0;
}

function getSlidesWithVideo(slides) {
  return [...slides].reduce((accumulator, currentValue) => {
    const video = currentValue.querySelector("video");

    if (video) {
      accumulator = [...accumulator, video];
    }

    return accumulator;
  }, []);
}

function initObservers(slidesWithVideo) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target;

      if (element.tagName !== "VIDEO") return;

      const hasFull = window.location.search.includes("full");

      if (entry.isIntersecting && hasFull) {
        element.play();

        if (element.dataset.loop) {
          element.setAttribute("loop");
        }

        return;
      }

      stopVideo(element);
    });
  }, options);

  slidesWithVideo.forEach(slideWithVideo => {
    observer.observe(slideWithVideo);
  });
}

function init() {
  const slides = document.querySelectorAll(".slide");

  initObservers(getSlidesWithVideo(slides));
}

document.addEventListener("DOMContentLoaded", init);
