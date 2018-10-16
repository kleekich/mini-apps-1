//Create an express application
var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send("Hello Breeze!");
});

var port = 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

