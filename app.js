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
mongoose.connect('mongodb://localhost:27017/movielist');

//on connection
mongoose.connection.on('connected',()=> {
	console.log('Connected to Local Database');
});

mongoose.connection.on('error',(err)=> {
	if(err) {
		console.log('Error in Database connection '+ err);
	}
});

//testing server
app.get('/',(req,res)=>{
	res.send('Welcome to Movie List Board!!!');
});

// app.listen(port,()=> {
// 	console.log('Server started at port: '+port);
// });

module.exports = app;

