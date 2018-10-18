var express = require('express');
var path = require('path');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host :'localhost',
	user :'root',
	password: '',
	database: 'checkout_app_db'
})

connection.connect();

connection.query('SELECT * from checkout_info', function(err, rows){
	if(err) throw err;
	console.log('The solution is: ', rows[0])
})


app.use(express.static('public'));


var port = 3000;

app.listen(port, ()=>{
	console.log('Listening to port ', port);
})
/*
CREATE TABLE checkout_info(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
	email VARCHAR(100),
	password VARCHAR(100),
	address_line1 VARCHAR(100),
	address_line2 VARCHAR(100), 
	city VARCHAR(100),
	state VARCHAR(100), 
	zip_code INT, 
	credit_card_number INT, 
	expiration_date DATE, 
	cvv INT, 
	billing_zip_code INT,
	PRIMARY KEY(id)
) 

INSERT INTO checkout_info (name, email, password, address_line1, address_line2, city, state, zip_code, credit_card_number, expiration_date, cvv, billing_zip_code) VALUES('Kangsik', 'aksdf@gmail.com', '1234', '7422 Christie Ave', "apt 134", 'Emeryville', 'CA', '92352', '12414153', '2008-11-11', '123', '125466');

*/