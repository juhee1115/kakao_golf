window.addEventListener("load", function () {
  const slider = document.getElementById("slider");
  const totalImages = 3;
  let current = 0;

  setInterval(() => {
    current = (current + 1) % totalImages;
    slider.style.transform = `translateX(-${current * (100 / totalImages)}%)`;
  }, 4000);
});