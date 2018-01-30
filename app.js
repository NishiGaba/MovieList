var express 			= 	require('express');
var bodyParser 			= 	require('body-parser');
var path 				= 	require('path');

var mongo				=	require('mongodb');
var mongoose			=	require('mongoose');
var db 					=	mongoose.connection;

var app = express();

//port number
const port = 3000;

//testing server
app.get('/',(req,res)=>{
	res.send('movie begins');
});

app.listen(port,()=> {
	console.log('Server started at port: '+port);
});
