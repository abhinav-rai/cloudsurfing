Songs = new Meteor.Collection("songs");

Meteor.startup(function () {
  if (Songs.find().count() == 0) {
    Songs.insert( {title: "Spies", description: "Spies Song", album: "Coloring Words EP", number: 0, file: "spies.mp3"});
    Songs.insert( {title: "Over and Above", description: "Over and Above Song", album: "Coloring Words EP", number: 1, file: "overandabove.mp3"});
    Songs.insert( {title: "Safe", description: "Safe Song", album: "Coloring Words EP", number: 2, file: "safe.mp3"});
    Songs.insert( {title: "Coloring Words", description: "Safe Song", album: "Coloring Words EP", number: 3, file: "coloringwords.mp3"});
  }
})
