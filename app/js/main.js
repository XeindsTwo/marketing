new Swiper('.swiper-benefits', {
  loop: true,
  slidesPerView: 1,
  speed: 1600,
  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },
  keyboard: {
    enabled: true,
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.process__item');
  const photos = document.querySelectorAll('.photo');
  const bottomPhoto = document.querySelector('.photo.bottom'); // Фотография для 4-го пункта
  const finalPhoto = document.querySelector('.photo.final'); // Фотография для 5-го пункта

  let currentIndex = 0; // Текущий индекс активного элемента

  // Устанавливаем первый элемент активным по умолчанию
  items[currentIndex].classList.add('active');
  photos[currentIndex].classList.add('active');

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (index === currentIndex) return; // Игнорировать клик, если элемент уже активен

      // Удаляем активный класс со всех элементов и фотографий
      items.forEach(i => i.classList.remove('active'));
      photos.forEach(p => p.classList.remove('active', 'active-2'));

      // Добавляем активный класс к выбранному элементу и соответствующей фотографии
      item.classList.add('active');
      photos[index].classList.add('active');

      // Специальная анимация для 5-го пункта
      if (index === 4) { // 5-й элемент имеет индекс 4
        // Активируем 4-ю фотографию с дополнительной анимацией
        bottomPhoto.classList.add('active');
        bottomPhoto.classList.add('active-2');
        finalPhoto.classList.add('active');
      } else {
        bottomPhoto.classList.remove('active-2');
        finalPhoto.classList.remove('active');
      }

      // Обновляем текущий индекс
      currentIndex = index;
    });
  });
});