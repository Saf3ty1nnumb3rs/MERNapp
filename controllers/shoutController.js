const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Con = require("../models/con");
const Shout = require("../models/shout");

//SHOUT Index ---------------------//////
router.get("/", (req, res) => {
  Con.findById(req.params.consId).then(cons => {
    const shouts = cons.shouts;
    res.json(shouts);
  });
});

//SHOUT create --------------------///////
router.post("/", (req, res) => {
  //Find Convention that comment is being added to
  Con.findById(req.params.consId)
    .then(cons => {
      const newShout = new Shout({
        date: { type: Date, default: Date.now },
        subject: req.body.subject,
        msg: req.body.msg
      });
      cons.shouts.push(newShout);
      return cons.save();
    })
    .then(savedShout => {
      res.send(savedShout);
    });
});

//SHOUT delete---------------------////////
router.delete("/:id", (req,res) => {
    Con.findById(req.params.consId)
    .then((cons) => {
        cons.shouts.id(req.params.id).remove()
        return cons.save()
    }).then((savedCon) => {
        res.send(savedCon)
    })
})
module.exports = router;
