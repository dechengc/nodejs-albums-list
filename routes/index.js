var express    = require('express');
var path       = require('path');
var router2    = express.Router();
router2.use(function (req, res, next) {
    console.log('Something is happening.');
    next();
});
router2.get('/albums', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/albums.html'));
});
module.exports = router2;