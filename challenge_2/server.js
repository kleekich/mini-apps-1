//Create an express application
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//Use express's use function to serve with static files
app.use(express.static('client'));

// app.get('/', function(req, res){
// 	//Serve index.html file
// 	//res.sendFile(path.join(__dirname + '/index.html'));
// });

app.post('/', function(req, res){
	console.log(req.body.userInput);
	res.redirect('/');
})

var port = 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

