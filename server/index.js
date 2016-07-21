var express = require('express'),
    app = express(),
    sampleData = require('./routes/sample-data'),
    secondSample = require('./routes/second-sample'),
    thirdSample = require('./routes/third-sample'),
    server;

// Redirect root route
app.route('/').get(function(req, res){
  res.redirect(301, '/sample-data');
});

// JSON responses from simulated endpoints
app.use('/sample-data', sampleData);
app.use('/second-sample', secondSample);
app.use('/third-sample', thirdSample);

// Server
server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port,
      currentTime = +new Date();

  console.log('App listening on port %s, at %s.', port, currentTime);
});
