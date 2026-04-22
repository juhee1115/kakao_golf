window.addEventListener("load", function () {
  const slider1 = document.getElementById("slider-1");
  const totalImages = 4;
  let current = 0;

  setInterval(() => {
    current = (current + 1) % totalImages;
    slider1.style.transform = `translateX(-${current * (100 / totalImages)}%)`;
  }, 3000);
});