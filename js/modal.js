// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//     body: document.querySelector("body")
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.modal.addEventListener("click", (e) => {
    // Закрывает при клике на фон
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    // Закрывает при Esc
    if (e.key === "Escape" && !refs.modal.classList.contains("is-hidden")) {
      toggleModal();
    }
  });

  // навешиваем обработчик на каждую кнопку открытия
  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
