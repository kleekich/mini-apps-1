//Create an express application
var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//Use express's use function to serve with static files
app.use(express.static('client'));

//Use body parser to get entire body portion of an incoming request on req.body
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded());


// app.get('/', function(req, res){
// 	//Serve index.html file
// 	//res.sendFile(path.join(__dirname + '/index.html'));
// });


app.post('/', function(req, res){
	// const reader = new FileReader()
	// var files = req.body;
	// console.log(files);
	// var selectedFile = files[0];
	// console.log(selectedFile);

	//Creating JSON string ommiting ';' at the end
	console.log("************************")
	console.log(req.body);
	console.log("************************")
	var jsonStr = req.body;
	jsonStr = jsonStr.substr(0,jsonStr.length-1);
	var objectJSON = JSON.parse(jsonStr);



	var buildCSV = function(objectJSON){
		//Aggregate arra
		var aggregateArr = [];
		//create a stack for DFS in nested object 
		var stack = [];
		//push root Object
		stack.push(objectJSON)
		while(stack.length!==0){
			//get current object
			var currObject = stack.pop();

			//Add children to stack
			for(var child of currObject.children){
				stack.push(child);
			}
			//build a line
			var newLineArr = [];	
			for(var key in currObject){
				if(key === 'children'){
					//get rid of comma at the end and add new line
					newLineArr.pop();
					newLineArr.push('\n');
				}else{
					//****check whether it is a string
					newLineArr.push(currObject[key]);
					newLineArr.push(',')	
				}
			}
			//Add joined newLine String to whole
			aggregateArr.push(newLineArr.join(''));
		}
		return aggregateArr.join('');
	}
 
	var csv = buildCSV(objectJSON);
	

	res.write('<html>');
	res.write('<body>');
	res.write('<h1>Hello, World!</h1>');
	res.write("<h1>Kangsik's CSV Report Generator</h1>");
	res.write("<form method='post' action='/'>");
	res.write("JSON text: <input id='input' type='textarea' name='userInputFile'/>");
	res.write("<input type='submit'/>");
	res.write("</form>");
	res.write('<p>'+csv+'</p>');
	res.write('</body>');
	res.write('</html>');
	res.end();
})

var port = 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

