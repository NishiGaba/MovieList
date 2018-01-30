var express 			= 	require('express');
var bodyParser 			= 	require('body-parser');
var path 				= 	require('path');

var mongo				=	require('mongodb');
var mongoose			=	require('mongoose');
var db 					=	mongoose.connection;

var app = express();

//port number
// const port = 3000;

//Body-Parser
app.use(bodyParser.json());

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


/* ***************************************************************** */
//Defining Routes
var movieRoute = require('./routes/movie');

//Using Routes
app.use('/movie',movieRoute);

/* ***************************************************************** */

//testing server
app.get('/',(req,res)=>{
	res.send('Welcome to Movie List Board!!!');
});

// app.listen(port,()=> {
// 	console.log('Server started at port: '+port);
// });

module.exports = app;

