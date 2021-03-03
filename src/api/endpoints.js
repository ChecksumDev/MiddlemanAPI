const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let endpoints = ["/v1/nsfw", "v1/sfw"];
    res.status(200).json(endpoints);
});

module.exports = router