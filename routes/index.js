const router = require('express').Router()
const apiRoute = require('./api')
const path = require('path')

router.use('/api', apiRoute)

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;