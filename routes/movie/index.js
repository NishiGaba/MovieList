/*
 * @author  Nishi Gaba
*/
let express = require('express');
let router  = express.Router( {mergeParams : true} );

let POST    = require('./POST');
let GET     = require('./GET');
let PUT 	= require('./PUT');
let DELETE 	= require('./DELETE');

// router.post('/', POST.add_movie) 
	
// 	.get('/', GET.get_movie) 

// 	.put('/:m_id', PUT.update_movie)

// 	.delete("/:m_id", DELETE.delete_movie);	

module.exports = router;
