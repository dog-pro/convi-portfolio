$(function(){
  $('.c-sitemap').click(function(){
    $('.p-sitemap').slideToggle(250);
    $('.c-sitemap__img').toggle();
    $('.c-sitemap__show').toggle();
  });
});

$(function(){
  $('.c-sitemap__sp').click(function(){
    $('.p-sitemap__container').slideToggle(250);
    $('.p-sitemap__contactSP').slideToggle(250);
    $('.c-sitemapSP__img').toggle();
    $('.c-sitemap__show').toggle();
  });
});
