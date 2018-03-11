const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Con = require("../models/con");
const User = require("../models/user");

//USER index -------------------/////////

router.get("/", (req, res) => {
  Con.findById(req.params.consId).then(cons => {
    const users = cons.users;
    res.json(users);
  });
});

//USER show --------------------/////////
router.get("/:id", (req, res) => {
  Con.findById(req.params.consId)
    .then(cons => {
      console.log("hi");
      console.log(cons);
      const user = cons.users.id(req.params.id);

      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

//USER create --------------------/////////
router.post("/", (req, res) => {
  //Find Convention user is signing up for
  Con.findById(req.params.consId)
    .then(cons => {
      const newUser = new User({
        name: req.body.name,
        img: req.body.img,
        userSince: req.body.userSince,
        favCon: req.body.favCon,
        about: req.body.about
      });
      cons.users.push(newUser);
      return cons.save();
    })
    .then((savedCon) => {
        res.send(savedCon)
    });
});

module.exports = router;
