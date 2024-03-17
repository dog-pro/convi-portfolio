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