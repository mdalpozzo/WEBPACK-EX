var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var convertedJSON;
//helper functions

var json2csv = function (obj) {
  var csv = [];
  var keys = Object.keys(obj).slice(0, -1);
  csv.push(keys);

  var parser = function (obj) {
    var values = [];
    for (var i = 0; i < keys.length; i++) {
      values.push(obj[keys[i]]);
    }
    csv.push(values);

    if (obj.children !== undefined) {
      for (var i = 0; i < obj.children.length; i++) {
        parser(obj.children[i]);
      }
    }
  }

  parser(obj);
  
  return csv;
}


//configure app
  // app.set('view', path.join(__dirname, 'view'));

//use middleware
app.use(express.static('client'));
app.use(bodyParser.json());  //??????????????????
//define routes

//next??? 
app.get('/', function (req, res, next) {
  res.sendFile('client/index.html');
  next();
});

//recieves post request when form is submitted
app.post('/convert', function (req, res, next) {
  //req.body has JSONtext from form input
  //PARSE JSON TO CSV RIGHT HERE-ISH
  convertedJSON = json2csv(req.body);
  // res.setHeader

  // req.body
  res.send(convertedJSON);
  // next();
});

app.get('/convert', function (req, res, next) {
  console.log(convertedJSON);
  res.send(convertedJSON);
});

var port = 1337;
app.listen(port, function () {
  console.log(`listening on port: ${port}`);
});





// entry point in package.json?????
