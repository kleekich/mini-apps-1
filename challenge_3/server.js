var express = require('express');

var app = express();


app.use(express.static('public'));


var port = 3000;

app.listen(port, ()=>{
	console.log('Listening to port ', port);
})

