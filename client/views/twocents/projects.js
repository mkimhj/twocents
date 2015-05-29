var flexAnimated = false;

function getPageScroll() {
    var yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      yScroll = document.documentElement.scrollTop;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
    }
    return yScroll
}

$( window ).scroll(function() {
	if (!flexAnimated) {
		if (parseInt((getPageScroll() + 400)) > parseInt(($('#projects').offset().top))) {
			 $('.flex-container').addClass("come-in"); 
			 flexAnimated = true;
		}
	}
});