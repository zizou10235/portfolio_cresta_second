// ハンバーガーメニュー
$('.berger-menu').click(function(){
  $('.nav-list').fadeToggle(300);
  $(this).toggleClass('cross');
  $('body').toggleClass('no-scroll');
});





// スティッキーヘッダー
$(function(){
  var $win = $(window),
      $fv = $('.fv'),
      $header = $('.header'),
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed';


      $win.on('load scroll', function(){
        var value = $(this).scrollTop();
        if($win.width() > 800){
          if(value > fvHeight){
            $header.addClass(fixedClass);
          }else{
            $header.removeClass(fixedClass);
          }
        }
      } )

});

// slider
$('.slider').slick({
  autoplay:true,
  autoplaySpeed:2000,
  fade:true,
  speed:2000,
});