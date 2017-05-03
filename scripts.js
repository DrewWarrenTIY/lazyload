$('body').on('click', '.js-slide-up', function () {
  $('.js-slider').removeClass('slide-up');
  $('.js-slider').addClass('no-slide');
})

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 2500) {
    $('.js-slider-one').removeClass('slide-up');
    $('.js-slider-one').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 2150) {
    $('.js-slider-two').removeClass('slide-up');
    $('.js-slider-two').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 1800) {
    $('.js-slider-three').removeClass('slide-up');
    $('.js-slider-three').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 1450) {
    $('.js-slider-four').removeClass('slide-up');
    $('.js-slider-four').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 1100) {
    $('.js-slider-five').removeClass('slide-up');
    $('.js-slider-five').addClass('no-slide');
  }
});
