$(document).ready(function(){}),$("#myCarousel").on("slide.bs.carousel",function(a){$(a.target).find(".carousel-inner > .item.active").index();var c=$(a.relatedTarget);c.index(),a.direction;let b=$(c).attr("id");$(".carousel-captionss p").hide(),$(".carousel-captionss."+b+" p").show(),$(".carousel-captionss").removeClass("active"),$(".carousel-captionss h3").removeClass("active"),$(".carousel-captionss."+b).addClass("active"),$(".carousel-captionss."+b+" h3").addClass("active")}),$(".heading-click-toggle").on("click",function(){let a=$(this).closest(".carousel-captionss").attr("data-id"),b=$(this).closest(".carousel-captionss").attr("data-index");b--,$(".carousel-inner .item").removeClass("active"),$("#"+a).addClass("active"),$(".carousel-captionss p").hide(),$(".carousel-captionss").removeClass("active"),$(".carousel-captionss h3").removeClass("active"),$(".carousel-captionss."+a).addClass("active"),$(".carousel-captionss."+a+" h3").addClass("active"),$(".carousel-captionss."+a+" p").show(),$(".carousel-indicators li").removeClass("active"),$("ol.carousel-indicators").find("[data-slide-to='"+b+"']").addClass("active")}),$(".carousel").swipe({swipe:function(b,a,c,d,e,f){"left"==a&&$(this).carousel("next"),"right"==a&&$(this).carousel("prev")},allowPageScroll:"vertical"})