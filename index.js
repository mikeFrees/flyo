const slider = document.querySelector('.slider');
const sliderFiller = document.querySelector('.progress-bar-fill');
let interval = null;
slider.addEventListener('mousedown', progressBar);
slider.addEventListener('touchstart', progressBar);
slider.addEventListener('mouseup', () => {
  clearInterval(interval);
}); 
slider.addEventListener('touchend', () => {
  clearInterval(interval);
});
function progressBar() {
  interval = setInterval(() => {
  let width = (slider.value / 10) + 1;
  if (width > 50) {
    width -= (width / 10) * 0.1;
  }
  sliderFiller.style.width = `${width}%`;
  }, 10);
}

progressBar();