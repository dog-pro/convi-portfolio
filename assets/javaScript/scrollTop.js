
$(function() {
  var pagetop = $('.c-scrollButton');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  
        //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });

  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });

  $(function(){
    var set = $('c-scrollButton').offset().top;
    $(window).scroll(function(){
      if($(window).scrollTop() > set){
      $('c-scrollButton').addClass('fixed');
      } else {
      $('c-scrollButton').removeClass('fixed');
      }
    });
  });
});
//   const scrollHeight = $(document).height();/*ページ全体の高さ*/
//   const scrollPosition = $(window).height() + $(window).scrollTop();/*ページの一番上からスクロールされた距離*/
//   const footHeight = $("footer").height();/*フッターの高さ*/

//   if ( scrollHeight - scrollPosition  <= footHeight ) {
//       $(".c-scrollButton").css({
//           "position":"absolute",
//           "bottom": 10  + footHeight,
//       });
//   } else {
//       $(".float-buwrap").css({
//           "position":"fixed",
//           "bottom": "10px",
//       });
//   }
// });
