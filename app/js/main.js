$(function () {

  $('.link-cart').on('click', function (e) {
    e.preventDefault();
    $(e.target).parent().toggleClass('shop-list__item-links--hidden');
    $('.shop-list__item-btn', $(e.target).parent().parent()).addClass('shop-list__item-btn--active');
  });

  $('.shop-list__item-btn').on('click', function (c) {
    $(c.target).removeClass('shop-list__item-btn--active');
    $('.shop-list__item-links').removeClass('shop-list__item-links--hidden');
  });

  $(".recent__item-star").rateYo({
    starWidth: "11px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });
  $(".star").rateYo({
    starWidth: "18px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    spacing: "12px",
    readOnly: true,
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  var mixer = mixitup('.product__items');
  var mixer = mixitup('.new__items');
})