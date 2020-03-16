const express = require('express');

// Set up express app
const app = express();

app.get('/api', function(req, res){
  console.log('GET request');
  res.send({name: 'Sandro'});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Now listening for requests');
});
