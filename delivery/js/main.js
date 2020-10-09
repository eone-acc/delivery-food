const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', function (event) {
  modal.classList.add("is-active");
});

close.addEventListener('click', function (event) {
  modal.classList.remove("is-active");
});

new WOW().init();