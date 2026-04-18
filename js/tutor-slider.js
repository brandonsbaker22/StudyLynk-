document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.tp-slider-track');
  const cards = document.querySelectorAll('.tp-slider-track .tp-card');
  const leftBtn = document.querySelector('.tp-slider-arrow-left');
  const rightBtn = document.querySelector('.tp-slider-arrow-right');
  let currentIndex = 0;
  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 24; // 24px gap
    track.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex === cards.length - 1;
  }
  leftBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
  rightBtn.addEventListener('click', function() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });
  updateSlider();
});
