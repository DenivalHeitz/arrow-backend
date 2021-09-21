

module.exports = app => {
    const states = require("../controllers/states.controller.js");
    var router = require("express").Router();
    
    // Retrieve all state vax data
    router.get("/vaccines", states.vaccines);
    router.get("/vaccines/:stateCode", states.vaccines);

    router.get("/quakes", states.quakes);
    router.get("/quakes/:magnitude", states.quakes);

    app.use('/api', router);
}