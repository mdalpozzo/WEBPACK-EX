var express = require('express');

const app = express();

const port = 1337;

app.use('/', express.static('public'));

app.listen(port, function() {
  console.log(`Server listening at port: ${port}`);
});