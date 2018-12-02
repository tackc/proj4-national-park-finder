const express = require('express');
const router = express.Router();
var request = require('request');
const rootURL = 'https://api.nps.gov/api/v1/';

// GET ALL PARKS
router.get('/parks', function(req, res) {
    request(
        rootURL + 'parks/?api_key=' + process.env.NPS_API_KEY,
        function(err, res, body) {
            res.json(JSON.parse(body))
        }
    );
});

// GET PARKS IN A SPECIFIC STATE
router.get('/parks/:code', function(req, res) {
    request(
        rootURL + 'parks' + '?stateCode=req.params.code' + '&api_key=' + process.env.NPS_API_KEY,
        function(err, res, body) {
            res.json(JSON.parse(body))
            console.log(JSON.parse(body))
        }
    );
});

// GET VISITORCENTERS
router.get('/visitorcenters', function(req, res) {
    request(
        rootURL + 'visitorcenters/' + req.body + 'api_key=' + process.env.NPS_API_KEY,
        function(err, res, body) {
            res.json(JSON.parse(body))
        }
    );
});

module.exports = router;