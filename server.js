var express = require('express');
var path = require('path');
var app = express();

var politics = require('./public/politics');

app.use(express.static('public'));

// index
app.get('/', function(req, res) {
  console.log(('req recieved'));
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/republican', function(req, res) {
  console.log('republican request');
  res.send(politics.republicans);
});

app.get('/democrat', function(req, res) {
  console.log('democrat request');
  res.send(politics.democrats);
});

app.get('/deciscion', function(req, res) {
  console.log('please dont let it be Trump');
  res.send(politics.findWinner());
});

//server listening
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('listening on port', port);
});
