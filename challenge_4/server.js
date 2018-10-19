var express = require('express');
var mysql = require('mysql');

app.use(mysql, )

connection

var app = express();

var port = 3000;

app.use(express.static('client/dist'));

app.listen(port, ()=>{
	console.log('listening to port: ', port);
})

