$(function(){
  $('.p-hamburger__button').click(function(){
    $('.barTop, .barMiddle, .barBottom').toggleClass('open');
    $('.p-hamburger').toggleClass('is-active',);
    $('.wrapper').toggleClass('close','.slow');
    // $('body').toggleClass('close','.slow');
  });
});

// $(function(){
//   $('.p-hamburger__button').click(function(){
//     $('.barTop, .barMiddle, .barBottom').toggleClass('open');
//     $('.p-hamburger').toggleClass('is-active'),2000;
//     $('.wrapper').toggleClass('close'),2000;
//   });
// });


// $(function(){
//   $('.p-hamburger__button').click(function(){
//     $('.barTop, .barMiddle, .barBottom').toggleClass('open');
//     $('header,main,footer').toggleClass('close');
//   });
//   if($('header,main,footer').hasClass('close')){
//     $('header,main,footer').addClass('fixed')
//   }
// });