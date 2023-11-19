// ドロップダウンメニュー middle
$(function() {
  $(".p-nav__middle li").hover(
    function() {
      //カーソルが重なった時,クラス名「open」を付与する
      $(this).children(".p-nav__middleSub").addClass("open");
      //hoverが外れた場合
    }, function() {
      //カーソルが離れた時,クラス名「open」を取り除く
      $(this).children(".p-nav__middleSub").removeClass("open");
    }
  );
});

// ドロップダウンメニュー middle
$(function() {
  $(".p-nav__rightTop li").hover(
    function() {
      //カーソルが重なった時,クラス名「open」を付与する
      $(this).children(".p-nav__rightSub").addClass("open");
      //hoverが外れた場合
    }, function() {
      //カーソルが離れた時,クラス名「open」を取り除く
      $(this).children(".p-nav__rightSub").removeClass("open");
    }
  );
});


// グローバルナビの開閉
// $(function() {
//   $('.nav-button-wrap').on('click', function() {
//     if ($(this).hasClass('active')) {
//       // スマホ用メニューが表示されていたとき
//       $(this).removeClass('active');
//       $('.globalnav').addClass('close');
//       $('.globalnav-wrap , body').removeClass('open');
//     } else {
//       // スマホ用メニューが非表示の時
//       $(this).addClass('active');
//       $('.globalnav').removeClass('close');
//       $('.globalnav-wrap , body').addClass('open');
//     }
//   });
// });