var express = require('express');
var cors = require('cors');
var https = require('https');
// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors());

app.use(function (req, res, next){

  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('dist'));
app.get('/getQuote', function (req, res1) {
  var url = 'https://api.forismatic.com/api/1.0/jsonp?method=getQuote&lang=en&format=json';

  https.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
      body += chunk;
    });

    res.on('end', function(){
      body = body.replace(/\\/g,'');
      var quoteResponse = JSON.parse(body);
      res1.send(quoteResponse.quoteText);
      //        console.log("Got a response: ", fbResponse.picture);
    });
  }).on('error', function(e){
    console.log("Got an error: ", e);
  });

});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
