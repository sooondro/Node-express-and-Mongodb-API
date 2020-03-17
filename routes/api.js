const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//Get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  /*Ninja.find({}).then(function(ninjas){
  res.send(ninjas);
    Search all ninjas
  });*/
  Ninja.aggregate().near({
   near: {
    'type': 'Point',
    'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
   },
   maxDistance: 100000,
   spherical: true,
   distanceField: "dis"
  }).then(function(ninjas){
    res.send(ninjas);
  });
});

//Add a new ninja to the db
router.post('/ninjas', function(req, res, next){
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);
});

//Update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  });
});

//Delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
  });
});

module.exports = router;
