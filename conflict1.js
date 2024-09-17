const button = document.querySelector('.ine-control__button');

button.addEventListener('hover', () => {
  button.classList.toggle('hover');
  button.style.backgroundColor = 'red';
});
