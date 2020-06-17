// $(window).scroll(() => {
//   if (document.body.scrollTop === 0)
//     $(".header").css({
//       "box-shadow": "none"
//     });
//   else
//     $(".header").css({
//       "box-shadow": "rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
//     });
// });

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });
});
