const express = require('express');
const router = express.Router();
var request = require('request');
const axios = require('axios');
const rootURL = 'https://api.nps.gov/api/v1/';
const User = require('../models/User');


// GET ALL PARKS
router.get('/parks', function(req, res) {

    request(
        rootURL + 'parks&api_key=' + process.env.NPS_API_KEY,
        function(err, response, body) {
            res.json(JSON.parse(body))
        }
    );
});

// GET PARK DETAILS BY STATE
router.get('/parks/:code', function(req, res) {

    request(
        rootURL + 'parks' + `?stateCode=${req.params.code}` + '&fields=images' + '&api_key=' + process.env.NPS_API_KEY,
        function(err, response, body) {
            // console.log(JSON.parse(body))
            res.json(JSON.parse(body))
        }
    );
});

// GET ALL VISITORS CENTERS
router.get('/visitorcenters', function(req, res) {
    request(
        rootURL + 'visitorcenters/' + req.body + 'api_key=' + process.env.NPS_API_KEY,
        function(err, response, body) {
            res.json(JSON.parse(body))
        }
    );
});

// ADD PARK TO FAVORITES
router.post('/favoriteparks', function (req, res) {
    User.findOne({_id: req.body.currentUser}, function (err, user) {
        if(err) res.send(err)
        let favoriteParks = user.favoriteParks;
        favoriteParks.push(req.body.parkToAdd)
        console.log(user)
        user.save()
        res.json(user)
    })
})

// GET FAVORITE PARKS
router.get('/favoriteparks', function(req, res) {
    User.findOne({_id: req.body.currentUser}, function (err, user) {
        if(err) res.send("Yo, you're getting an error")
        console.log(favoriteParks)
        res.json(user.favoriteParks)
    })
})

module.exports = router;