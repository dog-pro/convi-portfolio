$(function(){
  $('.p-hamburger__button').click(function(){
    $('.barTop, .barMiddle, .barBottom').toggleClass('open');
    $('.p-hamburger').toggleClass('is-active',);
    $('.wrapper').toggleClass('close','.slow');
    // $('body').toggleClass('close','.slow');
  });
});
