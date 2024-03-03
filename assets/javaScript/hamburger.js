$(function(){
  $('.p-hamburger__button').click(function(){
console.log('クリックしたよ');

    $('.barTop, .barMiddle, .barBottom').toggleClass('open');
    $('.p-hamburger').toggleClass('is-active',);
    $('.wrapper').toggleClass('close','.slow');
    // $('body').toggleClass('close','.slow');

    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('body').style.overflow = 'hidden';
  });
});
