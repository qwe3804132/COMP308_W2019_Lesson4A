let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let contact = require("../models/contact");

//Get contact list page - READ
router.get("/", (req, res, next) => {
  contact.find((err, contactList) => {
    console.log(contactList);
    if (err) {
      return console.error(err);
    } else {
      res.render("contacts/index", {
        title: "Contact List",
        contacts: contactList
      });
    }
  });
});

module.exports = router;
