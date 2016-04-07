var express = require('express');
var path = require('path');
var app = express();

var republicans = ["D. Trump", "S. Squanto", "B. Bird", "W. Waldo", "C. Pig", "C. McGreedy", "Q. Cumber", "I.P. Freely"];
var democrats = ["J. Howard", "M. Howard", "L. Fine", "S. Howard", "D. Suess", "H. Simpson", "P.J. Fry", "B.B. Rodriguez"]
app.use(express.static('public'));

// index
app.get('/', function(req, res) {
  console.log(('req recieved'));
  res.sendFile(path.join(__dirname, './index.html'));
});



app.get('/republican', function(req, res) {
  console.log('republican request');
});



app.get('/democrat', function(req, res) {
  console.log('democrat request');
});



//server listening
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('listening on port', port);
});
