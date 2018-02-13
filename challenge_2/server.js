var express = require('express');
var path = require('path');
var app = express();
var json2csv = require('express-json-2-csv');
var bodyParser = require('body-parser');
//configure app
  // app.set('view', path.join(__dirname, 'view'));

//use middleware
app.use(express.static('client'));
app.use(bodyParser.json());  //??????????????????
//define routes

app.get('/', function (req, res) {
  res.sendFile(client/index.html);
});

app.post('', function (req, res) {

});

var port = 1337;
app.listen(port, function () {
  console.log(`listening on port: ${port}`)
});



// entry point in package.json?????