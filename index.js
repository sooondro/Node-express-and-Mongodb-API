const express = require('express');

// Set up express app
const app = express();

//Initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Now listening for requests');
});
