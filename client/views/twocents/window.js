// Smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// Navigation appears
// $(window).scroll(function() {
//   var scrollHeight = $(document).scrollTop();
//   var bodyHeight = $("body").height();
//   if (scrollHeight >= bodyHeight/1.15) {
//     $("#navigation").removeClass("hidden");
//     $("#navbar-signup-button").removeClass("hide");
//     $("#navigation li a").css("background", 'url("img/two-cents-black.png") center no-repeat')
//     $("#navigation li a").css("background-size", "contain")
//   } else {
//     $("#navigation").addClass("hidden");
//     $("#navbar-signup-button").addClass("hide");
//     $("#navigation li a").css("background", 'url("img/two-cents-white.png") center no-repeat')
//     $("#navigation li a").css("background-size", "contain")
//   }
// });

// fade in window
$(window).load(function(){
  $("#fader").fadeOut(200);

  // // Determine aspect ratio of projects
  // $('.project-container').find('img').each(function(){
  // var imgClass = (this.width/this.height > 1) ? 'wide' : 'tall';
  // $(this).addClass(imgClass);
  // });
});


$(document).mouseup(function (e)
{
    var container = $(".share-container");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.addClass("hide");

    }
});