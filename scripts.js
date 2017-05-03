$('body').on('click', '.js-slide-up', function () {
  $('.js-slider').removeClass('slide-up');
  $('.js-slider').addClass('no-slide');
})

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 2000) {
    $('.js-slider-one').removeClass('slide-up');
    $('.js-slider-one').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 1650) {
    $('.js-slider-two').removeClass('slide-up');
    $('.js-slider-two').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 1300) {
    $('.js-slider-three').removeClass('slide-up');
    $('.js-slider-three').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 950) {
    $('.js-slider-four').removeClass('slide-up');
    $('.js-slider-four').addClass('no-slide');
  }
});

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 600) {
    $('.js-slider-five').removeClass('slide-up');
    $('.js-slider-five').addClass('no-slide');
  }
});
