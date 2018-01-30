var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  director: String,
  genre: String
});

module.exports = mongoose.model('Movie', movieSchema);