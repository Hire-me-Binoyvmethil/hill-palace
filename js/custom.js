


$(document).ready(function(){
	
 $('.imageSlider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false
    });

 $('.scroll-down').click(function(event) {
  $('.header .navbar-nav .nav-item a').removeClass('active')
  $(this).addClass('active')
        event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash,
            speed: 1000 ,
            offset: 0,

        });

    }); 
});

$(function() {  
  
    // Custom Easing
    //jQuery.scrollSpeed(100, 800, 'easeOutCubic');
    
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
});  

wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();