$(function(){
  $('.p-hamburger__button').click(function(){
console.log('クリックしたよ');

    $('.barTop, .barMiddle, .barBottom').toggleClass('open');
    $('.p-hamburger').toggleClass('is-active',);
    $('.wrapper').toggleClass('close','.slow');

    // ハンバーガーメニューが開いたときの処理
    if ($('.p-hamburger').hasClass('is-active')) {
      $('html, body').css('overflow', 'hidden'); // ページ全体のスクロールを無効化
    } else {
      $('html, body').css('overflow', 'auto'); // ページ全体のスクロールを有効化
    }
  });
});
