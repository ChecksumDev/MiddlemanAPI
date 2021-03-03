const express = require('express');
const router = express.Router();
const { Images, sequelize } = require('../../functions/database');

router.get('/', async (req, res) => {
    await Images.findOne({ where: { rating: 'SFW' }, order: sequelize.random() }).then((encounter) => {
        if (!encounter) return res.status(404).send("Something has gone wrong, no images were found!")
        return res.status(200).json(encounter.url)
    });
})

module.exports = router