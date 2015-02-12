(function() {
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  homeTeam: String,
  awayTeam: String,
  homeScore: Number,
  awayScore: Number,
  date: String
});

module.exports = mongoose.model('Game', GameSchema);

})();