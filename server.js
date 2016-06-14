var express    = require('express');
var bodyParser = require('body-parser');
var path       = require('path');

var app        = express();

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.Port || 3000;

var router = express.Router();

router.use(function (req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'Hello! Welcome to our api!'});
});

router.route('/users')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname, 'sample-data.json'));
    });

app.use('/api', router);

app.listen(port);

console.log('Magic happens on port ' + port);