var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

console.log('Visit http://localhost:5000/')
console.log('Press Ctrl+C to shut down...')

app.listen(process.env.PORT || 5000);

module.exports = app;
