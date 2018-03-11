const express = require("express");
const router = express.Router({
  mergeParams: true
});

const Con = require("../models/con");
const User = require("../models/user");

router.get("/", (req, res) => {
    Con.findById(req.params.consId)
    .then((cons) => {
        const users = cons.users
            res.json(users)
        })       
    })


router.get("/:id", (req, res) => {
  Con.findById(req.params.consId)
    .then((cons) => {
      console.log("hi")
      console.log(cons);
      const user = cons.users.id(req.params.id);

      res.json(user);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
