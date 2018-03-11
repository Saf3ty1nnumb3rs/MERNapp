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
    .then(savedCon => {
      res.send(savedCon);
    });
});

//USER Update ---------------------/////////
router.patch("/:id", (req, res) => {
  Con.findById(req.params.consId)
    .then(cons => {
      const user = cons.users.id(req.params.id);

      (user.name = req.body.name),
        (user.img = req.body.img),
        (user.userSince = req.body.userSince),
        (user.favCon = req.body.favCon),
        (user.about = req.body.about);

      return cons.save();
    })
    .then(updatedCon => {
      res.json(updatedCon);
    });
});

//User delete ---------------------/////////
router.delete("/:id", (req, res) => {
  Con.findById(req.params.consId)
    .then(cons => {
      cons.users.id(req.params.id).remove();
      return cons.save();
    })
    .then(savedCon => {
      res.send(savedCon);
    });
});

module.exports = router;
