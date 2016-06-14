var express    = require('express');
var path       = require('path');
var router = express.Router();
router.use(function (req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'Hello! Welcome to our api!'});
});

router.route('/albums')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname, '../sample-data.json'));
    });

module.exports = router;