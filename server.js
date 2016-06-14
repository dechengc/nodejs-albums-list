var express    = require('express');
var bodyParser = require('body-parser');
var path       = require('path');
var router     = require(path.join(__dirname, 'routes/api.js'));
var router2    = require(path.join(__dirname, 'routes/index.js'));
var app        = express();

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.Port || 3000;



app.use('/api', router);

app.use('/', router2);

app.listen(port);

console.log('Magic happens on port ' + port);
