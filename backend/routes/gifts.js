const router = require('express').Router();
let Gift = require('../models/gift.model');

router.route('/').get((req, res) => {
    Gift.find()
    .then(gifts => res.json(gifts))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/add').post((req, res => {
    const username = req.body.username;
    const cause = req.body.cause;
    const link = req.body.link;
    const date = Date.parse(req.body.date);

    const newGift = new Exercise({
        username,
        cause,
        link,
        date
    });

    newGift.save()
    .then(() => res.json('Gift added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
}))

module.exports = router;