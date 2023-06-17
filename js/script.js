const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');

function openModal (event) {
  event.preventDefault();
  modal.classList.remove('modal--close')
}

function closeModal () {
  modal.classList.add('modal--close')
}

modalBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
