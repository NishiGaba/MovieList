/*
 * @author  Nishi Gaba
*/
let express = require('express');
let router  = express.Router( {mergeParams : true} );
var Movie = require('../../models/movie');

// let POST    = require('./POST');
// let GET     = require('./GET');
// let PUT 	= require('./PUT');
// let DELETE 	= require('./DELETE');

router.get('/', function(req,res) {
	res.send('Movie get!!!');
}); 

router.post('/', function(req,res) {
	res.send('Movie post!!!');
}); 

router.put('/:m_id', function(req,res) {
	res.send('Movie put!!!');
}); 

router.delete('/:m_id', function(req,res) {
	res.send('Movie get!!!');
}); 

	// .post('/', POST.add_movie) 

	// .put('/:m_id', PUT.update_movie)

	// .delete("/:m_id", DELETE.delete_movie);	

module.exports = router;
