//Открытие и закрытие popup

const hikingPopupLink = document.querySelector('#hiking-popup');
const backpackingPopupLink = document.querySelector('#backpacking-popup');
const hikingPopupText = document.querySelector('.hiking-tour__popup');
const backpackingPopupText = document.querySelector('.backpacking-tour__popup');


function popupToggle(link, text) {
  link.addEventListener('click', () => {
    text.classList.toggle('popup--show');
  });
};

popupToggle(hikingPopupLink, hikingPopupText);
popupToggle(backpackingPopupLink, backpackingPopupText);
