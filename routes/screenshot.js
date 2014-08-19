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


/*
 * 
 * var express = require('express');
var url = require('url');
var webshot = require('webshot');
var fs      = require('fs');
var router = express.Router();

router.get('/', function(req, res) {
var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    
  //  webshot(query.url,  function(err,renderStream) {
          webshot('google.com',  function(err,renderStream) {
       renderStream.on('data', function(data) {
             res.writeHead(200, {'Content-Type': 'image/png'});
   res.end(data);
  });
        
    
});
 
});

module.exports = router;

 * /