var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

console.log('Visit http://localhost:3000/')
app.listen(process.env.PORT || 3000);
module.exports = app;
