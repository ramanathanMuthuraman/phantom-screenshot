var express = require('express');
var url = require('url');
var phantom = require('phantom');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    query.url;
  res.send('respond with a resource');
});

module.exports = router;
