var swiper = new Swiper('#imagem-central .swiper-container', {
  loop: true, 
  pagination: {
    el: '#imagem-central .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#imagem-central .swiper-button-next',
    prevEl: '#imagem-central .swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
