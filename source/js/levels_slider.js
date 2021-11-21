"use strict";
//Реализация слайдера для переключения между уровнями навыков секции levels

const levelsSlider = document.querySelector('#levels-slider');
const sliderStartValue = Number(levelsSlider.value);
const sliderStep = Number(levelsSlider.step);
const levelsInfoBlocks = document.querySelectorAll('.levels__info');

//Настройка первоначальной отрисовки секции

for (let i = 0; i < levelsInfoBlocks.length; i++) {
  i !== 0 ? levelsInfoBlocks[i].style.display = 'none' : '';
}

levelsSlider.addEventListener('input', (evt) => {
  levelsInfoBlocks.forEach(elem => elem.style.display = 'none');
  for (let i = 0; i < levelsInfoBlocks.length; i++) {
    if (Number(evt.target.value) === sliderStartValue + i * sliderStep) {
      levelsInfoBlocks[i].style.display = 'block';
    }
  }
});
