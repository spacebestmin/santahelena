const router = require('express').Router();
let Gift = require('../models/gift.model');

router.route('/').get((req, res) => {
    Gift.find()
    .then(gifts => res.json(gifts))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/add').post((req, res) => {
    const santaname = req.body.santaname;
    const gift = req.body.gift;
    const task = req.body.task;
    const deadline = req.body.deadline;
    const link = req.body.link;

//    const date = Date.parse(req.body.date);

    const newGift = new Gift({
        santaname,
        gift,
        task,
        deadline,
        link,
//        date
    });

    newGift.save() //its a promise
    .then(() => res.json('Gift added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

    router.route('/:id').get((req, res) => {
        Gift.findById(req.params.id)
       .then(gift => res.json(gift)) //get it, send it
       .catch(err => res.status(400).json('Error: '+ err));
    })

    router.route("/:id").delete((req, res) => {
        //Gift : seeking from model
        Gift.findByIdAndDelete(req.params.id)
        .then(() => res.json('Gift deleted!!'))
        .catch(err => res.status(400).json(`Err : ${err}`));
    });

    router.route("/update/:id").post((req,res) =>{
        Gift.findByIdAndUpdate(req.params.id)
        .then(gift => {
        gift.santaname = req.body.santaname;
        gift.gift = req.body.gift;
        gift.task = req.body.task;
        gift.deadline = req.body.deadline;
        gift.link = req.body.link;
        //date:{type:Date, required:true},

        gift.save()
        .then(()=> res.json("gift updated!!"))
        .catch(err => res.status(400).json(`Err : ${err}`));
    })
    .catch(err => res.status(400).json(`Err : ${err}`));
    });
//exporting the router
module.exports = router;