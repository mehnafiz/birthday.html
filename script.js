const heartButton = document.querySelector('.heart-button');
const secretMessage = document.querySelector('.secret-message');

heartButton.addEventListener('click', () => {
  secretMessage.classList.toggle('show');
});