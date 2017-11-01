function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList) { //rename songList?
    console.log(songList) //Look over the objects before you begin
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      // if (song.preview.slice(-4) != ".m4a") {
      //   continue
      // }
      if (song.kind != "song") {
        continue
      }
      template +=
        `
      <div class="col-sm-12 col-md-6 col-lg-4 thumbnail song-entry">
        <div>
            <img src="${song.albumArt}" alt="Song Image" class="song-thumb">
            <h2 class="song-title">${song.title}</h2>
            <h3 class="song-artist">${song.artist}</h3>
            <h5 class="song-collection">Collection: ${song.collection}</h6>
            <h5 class="song-price">Price: $${song.price}</h5>
            <audio controls src="${song.preview}" preload="auto" class="audio-preview"></audio>
        </div>
      </div>
      `
    }
    document.getElementById("songs").innerHTML = template
  }
  document.addEventListener('play', function (e) {
    var previews = document.getElementsByClassName('audio-preview');
    for (var i = 0; i < previews.length; i++) {
      if (previews[i] != e.target) {
        previews[i].pause();
      }
    }
  }, true);

}
