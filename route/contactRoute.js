const express = require("express");
const mongoose = require("mongoose");
const contactScheema = require("../scheema/contactScheema");

const contactRoute = express.Router();
const contact = mongoose.model("conatct", contactScheema);

contactRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    const newConatct = new contact({
      ...data,
    });
    await newConatct
      .save()
      .then((resp) => {
        res.status(200).json({ message: "conatact added successfully" });
      })
      .catch((err) => res.send(err));
  } catch (error) {
    console.log(error);
  }
});
contactRoute.get("/", async (req, res) => {
  try {
    const data = await contact.find();
    if(!data) {
        res.status(404).json({ message: "no contact here " });
    }else{
        res.status(200).send({
            message: 'success',
            data
        })
    }
  } catch (error) {}
});

module.exports = contactRoute;
