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

router.put('/:id', (req, res) => {
    const carData = req.body;
    db('car').update(carData)
    .where({id:req.params.id})
    .then(newCarUpdate => {
        res.status(200).json(newCarUpdate);
    })
    .catch(err => {
        res.status(500).json({ message: "Car not updated"});
    })
});

router.delete('/:id', (req, res) => {
    db('car').delete()
    .where({id:req.params.id})
    .then(carDelete => {
        res.status(200).json(carDelete);
    })
    .catch(err => {
        res.status(500).json({ message: "Car not deleted"});
    })
})


module.exports = router;