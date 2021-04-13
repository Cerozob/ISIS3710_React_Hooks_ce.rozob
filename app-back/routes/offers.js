var express = require('express');
var router = express.Router();
const jobs = require("../controller/jobs");
/* GET home page. */
router.get('/', async function (req, res, next) {
    let offers = await jobs.getJobs();
    if (offers.length === 0)
    {
        res.send([]);
    }
    else {
        res.send(offers);
    }
});

router.post("/", async function (req, res, next) {
    let agregado = await jobs.addJob(req.body);
    console.log("Job added")
    res.status(200).send(agregado);
});
module.exports = router;