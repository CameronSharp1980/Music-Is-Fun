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
      template +=
        `
      <div class="col-sm-12 col-md-5 col-lg-4 thumbnail">
        <div>
            <img src="${song.albumArt}" alt="Song Image" class="song-thumb">
            <h4>${song.artist}</h4>
            <h6 class="song-collection">${song.collection}</h6>
            <h4>${song.title}</h4>
            <h5>${song.price}</h5>
            <audio controls src="${song.preview}" preload="auto"></audio>

        </div>
      </div>
      `
    }
    document.getElementById("songs").innerHTML = template
  }





}
