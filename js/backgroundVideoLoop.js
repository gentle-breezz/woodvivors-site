

$(document).ready(function() {

var breakpoint = 992;

if($(document).width() < breakpoint + 1) {}

/*Background video only if not mobile*/
else {
  var videos = [
    'background1.mp4',
    'background2.mp4',
    'background3.mp4',
    'background4.mp4',
    'background5.mp4',
    'background6.mp4'
  ];

  var vid = document.getElementById('bgvid');
  var activeVideo = Math.floor((Math.random() * videos.length));
  vid.src = "video/" + videos[activeVideo];

  var n = videos.length;
  var cnt = activeVideo;

  function playVideo(x) {

    var mp4 = videos[x];
    vid.src = "video/"+mp4;
    vid.load();
    vid.play();
  }

  vid.addEventListener('ended', next, false);


  function next() {
    cnt++;
    if (cnt < n) {
      playVideo(cnt);
    } else {
      cnt = 0;
      playVideo(cnt);
    }
  }
}
});
