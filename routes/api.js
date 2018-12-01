const express = require('express');
const router = express.Router();
var request = require('request');
const rootURL = 'https://api.nps.gov/api/v1/';


router.get('/parks', function(req, res) {
    request(
        rootURL + 'parks/?api_key=' + process.env.NPS_API_KEY,
        function(err, response, body) {
            res.json(JSON.parse(body))
        }
    );
});

router.get('/parks/:code', function(req, res) {
    request(
        rootURL + 'parks/?api_key=' + process.env.NPS_API_KEY + "?stateCode==req.params.code",
        function(err, response, body) {
            res.json(JSON.parse(body))
        }
    );
});

router.get('/visitorcenters', function(req, res) {
    request(
        rootURL + 'visitorcenters/' + req.body + 
            'api_key=' + process.env.NPS_API_KEY,
        function(err, response, body) {
            res.json(JSON.parse(body))
        }
    );
});

module.exports = router;