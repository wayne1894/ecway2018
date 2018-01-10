$(function(){
  $(".move_btn").click(function(){
     var i=$(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    $(this).parent().prev().stop().animate({scrollLeft: i*(450*3)}, 400)
  })
})