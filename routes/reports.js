var express = require('express');
var router = express.Router();

/* GET reports page */
router.get('/', global.authenticationMiddleware(), function(req, res, next) {
    res.render('reports', { });
});

module.exports = router;
