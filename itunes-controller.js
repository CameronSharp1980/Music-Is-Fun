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
      template +=
        `
      <div class="col-sm-12 col-md-6 col-lg-3 thumbnail">
        <div>
            <img src="${song.albumArt}" alt="Song Image">
            <h4>${song.artist}</h4>
            <h5>${song.collection}</h5>
            <h5>${song.title}</h5>
            <h6>${song.price}</h6>
            <audio controls src="${song.preview}" preload="auto"></audio>

        </div>
      </div>
      `
    }
    document.getElementById("songs").innerHTML = template
  }





}
