document.addEventListener("fullscreenchange", FShandler);
document.addEventListener("webkitfullscreenchange", FShandler);
document.addEventListener("mozfullscreenchange", FShandler);
document.addEventListener("MSFullscreenChange", FShandler);

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

// Find the right method, call on correct element
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitVideo() {
  iframe = document.getElementById("iframe");
  player.pauseVideo();
  exitFullscreen();
  $('iframe#player').css("z-index", "-10");
  $('#close-button').css("z-index", "-10");
}

//Youtube object to change the state of the splash page's background based on whether or not the video is playing.
onYouTubeIframeAPIReady = function () {
    player = new YT.Player("player", {
        height: "405", 
        width: "720", 
        videoId: "wRtLMYtwMhE", 
        playerVars:{'color': "red", 
                    'showinfo': 0, 
                    'theme': 'light', 
                    'rel': 0, 
                    'playsinline': 1, 
                    'modestbranding': 1,
                    'fs': 0,
                    'autohide': 1},
        // Events like ready, state change, 
        events: {
            onReady: function (event) {
                // Play video when player ready. We can automatically play video if we uncomment...
                // event.target.playVideo();
            },

            //Set played variable to true if video is playing, false otherwise
            onStateChange: function(event) {
            }
        }
    });
};

//Load Youtube
YT.load();

Template.video.events({
  'click #video-button': function(event) {
    player.playVideo();
    $('iframe#player').css("z-index", "1000");
    $('#close-button').css("z-index", "3147483647");
    iframe = document.getElementById("player");
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      launchIntoFullscreen(iframe);
    }
  },

  'click #close-button': function(event) {
    exitVideo();
  }
});

function FShandler() {
  if (!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
    exitVideo();
  } 
}