//Youtube object to change the state of the splash page's background based on whether or not the video is playing.
onYouTubeIframeAPIReady = function () {
    player = new YT.Player("player", {
        height: "405", 
        width: "720", 
        videoId: "wRtLMYtwMhE", 
        playerVars: {'color': "white", 'showinfo': 0},
        // Events like ready, state change, 
        events: {
            onReady: function (event) {
                // Play video when player ready. We can automatically play video if we uncomment...
                // event.target.playVideo();
            },

            //Set played variable to true if video is playing, false otherwise
            onStateChange: function(event) {
              if (player.getPlayerState() == 1) {
                Session.set("played", true);
              } else {
                Session.set("played", false);
              }
            }
        }
    });
};

//Load Youtube
YT.load();

//Functions that are accessible by the HTML
Template.video.helpers({
  played: function() {
    return Session.get("played");
  }
});