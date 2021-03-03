const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(404).send("There is nothing here, if you are looking for api endpoints, check out /endpoints.");
})

module.exports = router