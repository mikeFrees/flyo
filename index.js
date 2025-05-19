const slider = document.querySelector(".slider");
const sliderFiller = document.querySelector(".progress-bar-fill");
const spaceLeft = document.getElementById("space-left");
const spaceUsed = document.getElementById("space-used");

let interval = null;

slider.addEventListener("input", updateProgress);

function updateProgress() {

  let width = (slider.value / slider.max) * 100;
  sliderFiller.style.width = `${width}%`;
  spaceLeft.textContent = 1000 - slider.value;
  spaceUsed.textContent = `${slider.value} GB`;
}
updateProgress();