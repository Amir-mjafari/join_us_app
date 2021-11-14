var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'join_us'   // the name of your db
});

var express = require('express');
 
var app = express();
 
// app.get("/", function(req, res){
//  res.send("BIA BOKHORESH 2!!!");
// });

app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var msg = "We have " + results[0].count + " users";
 res.send(msg);
 });
});
 
app.listen(3000, function () {
 console.log('App listening on port 3000!');
});