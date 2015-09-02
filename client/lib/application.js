/* Do this for any template with enough content to be scrollable */
function loadScrollBar() {
  $("#page_content").mCustomScrollbar({
              theme: "dark"
            });
}

Template.about.rendered = function(){
  loadScrollBar();
  };

Template.music.rendered = function(){
  Songs = new Meteor.Collection("songs");

  /* Returns true if a song is currently playing (pause button shown). False otherwise */
  function isSongCurrentlyPlaying() {
    if ($('#play_pause').attr('class') == "fa fa-pause") {
      return true;
    }
    return false;
  }

  function mod(n, m) {
    return ((n % m) + m) % m;
  }


  $('#play_pause').click(function() {
      if (isSongCurrentlyPlaying()) {
        $(this).attr('class', 'fa fa-play');
        $('#current_track')[0].pause();
      } else {
        $(this).attr('class', 'fa fa-pause');
        $('#current_track')[0].play();
      }
    });

  $("#next_song").click(function() {
    var num_songs = Songs.find().count();
    var current_song = Songs.find({ file: $('#current_track').attr('src') }).fetch()[0];
    var next_num = mod((current_song.number + 1), num_songs);
    var next_song = Songs.find( {number: next_num} ).fetch()[0];
    $('#current_track').attr('src', next_song.file);
    $('#page_content').html('<div id="page_content_title">' + next_song.title + '</div>');
    if (isSongCurrentlyPlaying()) {
      $('#current_track')[0].play();
    }
  });

  $("#previous_song").click(function() {
    var num_songs = Songs.find().count();
    var current_song = Songs.find({ file: $('#current_track').attr('src') }).fetch()[0];
    var previous_num = mod((current_song.number - 1), num_songs);
    var previous_song = Songs.find( {number: previous_num} ).fetch()[0];
    $('#current_track').attr('src', previous_song.file);
    $('#page_content').html('<div id="page_content_title">' + previous_song.title + '</div>');
    if (isSongCurrentlyPlaying()) {
      $('#current_track')[0].play();
    }
  });
};
