const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//Get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  res.send({type:'GET'});
});

//Add a new ninja to the db
router.post('/ninjas', function(req, res, next){
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);
});

//Update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
  res.send({type:'PUT'});
});

//Delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
  });
});

module.exports = router;
