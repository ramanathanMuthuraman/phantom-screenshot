var express = require('express');
var url = require('url');
var webshot = require('webshot');
var fs      = require('fs');
var router = express.Router();
 
router.get('/', function(req, res) {
var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var options ={
    phantomConfig:{
    'https-proxy':  'http://289990:august-1@proxy.cognizant.com:6050/',
    'proxy' : 'http://289990:august-1@proxy.cognizant.com:6050/'
    }
    };
      res.writeHead(200, {'Content-Type': 'image/png'});
      webshot('google.com', 'ram.png', function(err) {
             if (err) throw err
            console.log('File saved.')
  
           fs.readFile('ram.png', 'utf8', function(err, image){
        res.end(image, 'binary');
    });
 
});
  
  
});
 
module.exports = router;