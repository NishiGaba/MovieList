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
	Movie.find(function(err,movies) {
		res.json(movies);
	})
}); 

router.post('/', function(req,res) {
	res.send('Movie post!!!');

	let newMovie = new Movie({
		title : req.body.title,
		director : req.body.director,
		genre : req.body.genre
	});

	newMovie.save((err,movie)=> {
		if(err) {
			res.json({msg: 'Failed to add movie'});
		} else {
			res.json({msg: 'Movie Added Successfully'});
		}
	})
}); 

router.put('/:m_id', function(req,res) {
	res.send('Movie put!!!');
}); 

router.delete('/:m_id', function(req,res) {
	res.send('Movie delete!!!');

	Movie.remove({id: req.params.id},function(err,result) {
		if(err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
}); 

	// .post('/', POST.add_movie) 

	// .put('/:m_id', PUT.update_movie)

	// .delete("/:m_id", DELETE.delete_movie);	

module.exports = router;
