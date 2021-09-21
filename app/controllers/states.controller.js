const axios = require('axios');


const stateData = require('../data/state-vax-data.json');

// Get state vax data
exports.vaccines = (req, res) => {
    const stateCode = req.params.stateCode;
    
    if (stateCode) {
        res.json(stateData[stateCode]);
        return;
    }
    
    let states = [];

    for (const stateCode in stateData) {
        const state = stateData[stateCode];
        states.push(state);
    }

    res.json(states);
};

// Get earthquake data
exports.quakes = (req, res) => {
    const magnitude = req.params.magnitude;

    if (magnitude) {
        axios.get('https://soda.demo.socrata.com/resource/6yvf-kk3n.json',{
            params: {
                magnitude: magnitude
            }
        }).then(function (response) {
            // handle success
            res.json(response.data);
        }).catch(function (error) {
            // handle error
            console.log(error);
        })

        return;
    }

    axios.get('https://soda.demo.socrata.com/resource/6yvf-kk3n.json')
    .then(function (response) {
        // handle success
        res.json(response.data);
    }).catch(function (error) {
        // handle error
        console.log(error);
    })
};