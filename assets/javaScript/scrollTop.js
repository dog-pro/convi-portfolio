
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
    var set = $('.c-scrollButton').offset().top;
    $(window).scroll(function(){
      if($(window).scrollTop() > set){
      $('.c-scrollButton').addClass('.fixed');
      } else {
      $('.c-scrollButton').removeClass('.fixed');
      }
    });
  });
});