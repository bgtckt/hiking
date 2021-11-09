//Открытие и закрытие главного меню в мобильной версии по нажатию кнопки

const toggleButton = document.querySelector('.page-header__button');
const mainNav = document.querySelector('.main-nav');

toggleButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
});
