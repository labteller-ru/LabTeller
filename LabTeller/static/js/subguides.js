const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  navigation: {
    nextEl: '.carousel__button--next',
    prevEl: '.carousel__button--prev',
  },
  loop: true,
});
