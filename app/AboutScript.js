$(document).ready(function(){
    const registerVideo = (bound, video) => {
      bound = document.querySelector(bound);
      video = document.querySelector(video);
      const scrollVideo = function(){
        if(video.duration) {
          const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
          const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
          const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
          
          video.currentTime = video.duration * percentScrolled;
        }
        requestAnimationFrame(scrollVideo);
      }
      requestAnimationFrame(scrollVideo);
    }
    registerVideo("#bound-one", "#bound-one video"); 
    if ($('.firstReel').hasClass('default')) {
      $('.promo').removeClass('chosen');
      $('.firstPromo').addClass('chosen');
    } 
    $("button").click(function(){
      $("button").removeClass("default");
      $(this).addClass("default");
      if ($('.firstReel').hasClass('default')) {
        $('.promo').removeClass('chosen');
        $('.firstPromo').addClass('chosen');
      } else if ($('.secondReel').hasClass('default')) {
        $('.promo').removeClass('chosen');
        $('.secondPromo').addClass('chosen');
      } else if ($('.thirdReel').hasClass('default')) {
        $('.promo').removeClass('chosen');
        $('.thirdPromo').addClass('chosen');
      }
    })
    $(".toggle").click(function(){
      $(".toggle").toggleClass("open_menu");
      $(".default_navigation").toggleClass("open_navigation");
    })
  
})

