//use this to listen on port 8080

var express = require('express');
var fs = require('fs');
//var index = 

var app = express.createServer(express.logger());

/*
fs.readFileSync('./index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});
*/

app.get('/', function(request, response) {
    //response.send('Hello World 2! modified 17:40 on July 9 2013!');
    //use: fs.readFileSync(filename, [options])

    var text = fs.readFileSync('./index.html', 'utf8');
    console.log(text);
    response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});





