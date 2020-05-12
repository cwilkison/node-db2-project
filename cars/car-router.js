const express = require('express');
const knex = require('knex');

const db = require("../data/dbConnection.js");
const router = express.Router();

router.get('/', (req, res) => {
    db('car')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve cars"})
    });
});

  
router.post('/', (req, res) => {
    const carData = req.body;
    db('car').insert(carData)
    .then(newCarEntry => {
        res.status(200).json(newCarEntry);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to store data" });
    })
});


module.exports = router;