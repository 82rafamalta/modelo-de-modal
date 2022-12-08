'use strict';

// elencando as classes que serão utilizadas no processo
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// funções base
const openModal = function () {
  // removendo a classe 'hidden' do modal e do overelay
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  // adicionando a classe 'hidden' do modal e do overelay
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// fazendo loop entre os botões com a mesma classe
for (let i = 0; i < btnShowModal.length; i++)
  // mostrando o modal
  btnShowModal[i].addEventListener('click', openModal);

//fechando o modal no 'x'
btnCloseModal.addEventListener('click', closeModal);

//fechando o modal no overlay (area fora do modal)
overlay.addEventListener('click', closeModal);

//fechando o modal com a tecla 'esc'
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
