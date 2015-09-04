var express =       require('express');
var router =        express.Router();
var mongoose =      require('mongoose');
var Week =          require('../model/Week.js');
var Reading =       require('../model/Reading.js');


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('DGM Api Hit');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET base API page. */
router.route('/')
.get(function(req, res, next) {
    res.status(200).json({
        "data":{},
        "author":"Tyler Maynard"
    });
});

/* GET home page. */
router.route('/weeks')
.post(function(req,res,next){
    console.log(req.body.week);

    if (req.body.week === 0 || req.body.week === null || req.body.week === undefined || req.body.week === "" ) {
        console.log('Trying to save an invalid # as week...');
        res.status(400).json({"error":"invalid week number"});
    } else {
        var week = new Week();

        week.week = req.body.week;

        week.save(function(err, doc){
            if (err) {
                if (err.code === 11000) {
                    res.status(409).json({"error":"week already exists"});
                } else {
                    res.send(err);
                }
            }
            else
            {
                res.json({
                    "message":"Succesfully saved week!",
                    "week":doc
                });
            }
        });           
    }
})
.get(function(req, res, next) {
    Week.find(function(err, allWeeks){
        if (err) {
            console.log(err);
            res.status(500).send("Sorry something went wrong");
        } 
        else 
        {
            res.status(200).json({
                "data":allWeeks,
                "author":"Tyler Maynard"
            });
        }
    });
});


module.exports = router;
