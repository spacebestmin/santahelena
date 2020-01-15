const router = require('express').Router();
let Santa = require('../models/santa.model');

router.route('/').get((req, res) => {
    Santa.find()
    .then(santa => res.json(santa))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const santaname = req.body.santaname;
    const newSanta = new Santa({santaname});

    newSanta.save()
    .then(() => res.json('Santa added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;