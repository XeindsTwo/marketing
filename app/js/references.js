document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  let lastFocusedElement;

  const openModal = (btn) => {
    lastFocusedElement = btn;
    body.classList.add('active');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    closeModalBtn.focus();
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleOutsideClick);
  };

  const closeModal = () => {
    body.classList.remove('active');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleOutsideClick);
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleOutsideClick = (event) => {
    if (!modal.contains(event.target) && !event.target.closest('.network__btn.references')) {
      closeModal();
    }
  };

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('.network__btn.references');
    if (btn) {
      openModal(btn);
    }
  });

  closeModalBtn.addEventListener('click', closeModal);
});