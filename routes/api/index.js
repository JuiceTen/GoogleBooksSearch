const router = require('express').Router()
const bookApi = require('./bookApi')

router.use('/books', bookApi);

module.exports = router;