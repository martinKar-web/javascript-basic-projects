// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal');
});
