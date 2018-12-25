var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('build'));

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
