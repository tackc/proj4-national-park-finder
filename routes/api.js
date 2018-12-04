const express = require('express');
const router = express.Router();
var request = require('request');
const axios = require('axios');
const rootURL = 'https://api.nps.gov/api/v1/';


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
        rootURL + 'visitorcenters/' + req.body + 
            'api_key=' + process.env.NPS_API_KEY,
        function(err, response, body) {
            res.json(JSON.parse(body))
        }
    );
});

// ADD PARK TO FAVORITES

router.post('/favoriteParks', function (req, res) {
    res.send('POST request to the favoriteParks list')
})


// axios.post('/:user/favoriteparks', {
//     parkId: ""
//     })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

module.exports = router;