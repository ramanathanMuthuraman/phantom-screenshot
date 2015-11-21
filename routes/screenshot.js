var express = require('express');
var url = require('url');
var webshot = require('webshot');
var fs      = require('fs');
var del = require('del');
var router = express.Router();
 
router.get('/', function(req, res) {
var url_parts = url.parse(req.url, true);

     var screenShotURL = url_parts.query.url;
var outputPath =__base+"public/result/";

    if (screenShotURL === undefined || screenShotURL == '') {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("404 Not Found");
  }
   	var filename = screenShotURL.replace(/\W/g, '_') + ".png"
     var options = {
       //windowSize:{width:480,height:320},
       shotSize:{width:'all',height:'all'}
};
    del.sync(outputPath+"/*");
      webshot(screenShotURL, outputPath+filename,options, function(err) {
             if (err) throw err
               /*send the filename as response*/
      res.end(filename);

});
 
  
});
 
module.exports = router;