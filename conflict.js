const button = document.querySelector('.ine-control__button');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  button.style.backgroundColor = 'red';
});
