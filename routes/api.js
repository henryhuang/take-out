var express = require('express');
var router = express.Router();

const data = require('../data/menu');

/* GET users listing. */
router.get(['/', '/:type'], function (req, res, next) {
    const type = req.params.type;
    if (type) {
        res.status(200).json(data[type]);
    } else {
        res.status(200).json(data);
    }
});

module.exports = router;
