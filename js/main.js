    var img_i="top.jpg";
function change_img(){
    if(img_i=="top.jpg"){
        img_i="top2.png"
    }else{
         img_i="top.jpg"
    }
 $("#top_img").animate({opacity: 0},1000,function(){
     $("#top_img").attr("src","img/"+img_i+"").animate({opacity: 1},1000);
     setTimeout(change_img,8000);
 })
   
}    


$(function(){
        setTimeout(function(){
                    $(".list_move").html('<img src="img/b1.png" alt=""><img src="img/b2.png" alt=""><img src="img/b3.png" alt=""><img src="img/b4.png" alt=""><img src="img/b5.png" alt=""><img src="img/b6.png" alt=""><img src="img/b7.png" alt=""><img src="img/b8.png" alt="">')
        $("#down").click(function(){
            var _img=$(this).find("img").attr('src')
            if(_img.indexOf("down-arrow")>-1){
                $(this).find("img").attr('src',"img/up-arrow.svg");
                
                              $(".list_move").hide();
                                $(".list-t1").show();$(".list-t2").show();$(".list-t3").show();$(".list-t4").show();$(".list-t5").show();$(".list-t6").show();$(".list-t7").show();$(".list-t8").show();
            
                
            }else{
                $(this).find("img").attr('src',"img/down-arrow.svg");
                
                
                    $(".list_move").show()
                $(".list-t1").hide();$(".list-t2").hide();$(".list-t3").hide();$(".list-t4").hide();$(".list-t5").hide();$(".list-t6").hide();$(".list-t7").hide();$(".list-t8").hide();

                
            }
           
        }).click()
            
          $(".list_move>img").click(function(){
            var i=$(this).index();
              if($(this).hasClass("opacity_1"))return;
            $(this).parent().prev().prev().prev().find(".c-list-parent").stop().animate({scrollLeft: i*(390)}, 500);
            var $img=$(this).parent().find(">img")
            $img.css("opacity",".2");
             var _length=$(this).parent().find(">img").length;
              if(i==_length-1){
                $img.eq(i).css("opacity","1");
                $img.eq(i-1).css("opacity","1");
                $img.eq(i-2).css("opacity","1");      
              }else if(i==_length-2){
                $img.eq(i-1).css("opacity","1");
                $img.eq(i).css("opacity","1");
                $img.eq(i+1).css("opacity","1");     
              }else{
                $img.eq(i).css("opacity","1");
                $img.eq(i+1).css("opacity","1");
                $img.eq(i+2).css("opacity","1");
              }
          })
        },5)
        
        for(var i=1;i<7;i++){
            
            $(".list-"+i+"").after('<div class="list list-t'+i+'"></div><div class="list list-t'+i+'"></div><div class="list_move"></div>');

             $(".list-"+i+"").next().html("<div class='c-list-parent'>"+"<div class='c-list'>"+$(".list-"+i+" .c-list").eq(3).html()+"</div>"+"<div class='c-list'>"+$(".list-"+i+" .c-list").eq(4).html()+"</div>"+"<div class='c-list'>"+$(".list-"+i+" .c-list").eq(5).html()+"</div>"+"</div>")
            var _list=""
            if(i==2 || i==4 || i==6){
                _list="<div class='c-list'></div>"
            }
            $(".list-"+i+"").next().next().html("<div class='c-list-parent'>"+_list+"<div class='c-list'>"+$(".list-"+i+" .c-list").eq(6).html()+"</div>"+"<div class='c-list'>"+$(".list-"+i+" .c-list").eq(7).html()+"</div>"+"</div>")
        }

         setTimeout(change_img,8000);
        
    })