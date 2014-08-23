var express = require('express');
var url = require('url');
var webshot = require('webshot');
var fs      = require('fs');
var router = express.Router();
 
router.get('/', function(req, res) {
var url_parts = url.parse(req.url, true);
    console.log(url_parts.query.url)
     var screenShotURL = url_parts.query.url;

    if (screenShotURL === undefined || screenShotURL == '') {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("404 Not Found");
  }
   	var filename = screenShotURL.replace(/\W/g, '_') + ".png"
      res.writeHead(200, {'Content-Type': 'image/png'});
      webshot(screenShotURL, filename, function(err) {
             if (err) throw err
            console.log('File saved.')
  
       fs.readFile(filename, function(err, data) {
  if (err) throw err; // Fail if the file can't be read.
  
    res.end(data); // Send the file data to the browser.


});
 
});
 
  
});
 
module.exports = router;