$(document).ready(function () {
        $('#myModal').on('show.bs.modal', function () {
            var mod = $('.modal'); 
            $('.wrap').html(mod);
        });
    });
    var myPlayer,
  playerHTML,
  // +++ Set the data for the player +++
  playerData = {
    accountId: "1752604059001",
    playerId: "rJtrO8EKW",
    videoId: "5550679964001"
  };

// +++ Build the player and place in HTML DOM +++
function addPlayer() {
  // Dynamically build the player video element
  playerHTML =
    '<video-js id="myPlayerID" data-video-id="' +
    playerData.videoId +
    '"  data-account="' +
    playerData.accountId +
    '" data-player="' +
    playerData.playerId +
    '" data-embed="default" controls></video-js>';
  // Inject the player code into the DOM
  document.getElementById("placeHolder").innerHTML = playerHTML;
  // Add and execute the player script tag
  var s = document.createElement("script");
  s.src =
    "https://players.brightcove.net/" +
    playerData.accountId +
    "/" +
    playerData.playerId +
    "_default/index.min.js";
  // Add the script tag to the document
  document.body.appendChild(s);
  // Call a function to play the video once player's JavaScropt loaded
  s.onload = callback;
}

// +++ Initialize the player and start the video +++
function callback() {
  myPlayer = bc("myPlayerID");
  // Can also use the following to assign a player instance to the variable if you choose not to use IDs for elements directly
  // myPlayer = bc(document.getElementById('myPlayerID'));
  myPlayer.on("loadedmetadata", function() {
    // Mute the audio track, if there is one, so video will autoplay on button click
    myPlayer.muted(true);
    myPlayer.play();
  });
}