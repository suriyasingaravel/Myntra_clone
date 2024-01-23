const express = require("express");
const { AddressModel } = require("../models/Address.model");
const addressRouter = express.Router();
const { authenticate } = require("../middlewares/Authenticate.middleware");

addressRouter.get("/", async (req, res) => {
  const address = await AddressModel.find({ userID: req.body.userID });
  res.send({ userID: req.body.userID, address: address });
});

addressRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const address = await AddressModel.findById(id);
  res.send(address);
});

addressRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const post = new AddressModel(payload);
    await post.save();
    res.send({ msg: `Address Added successfully`, userID: payload.userID });
  } 
  catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

addressRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  try {
    await AddressModel.findByIdAndUpdate(req.params.id, payload);
    res.send({ msg: `Address updated successfully` });
  } 
  catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
});

addressRouter.delete("/delete/:id", async (req, res) => {
  try {
    await AddressModel.findByIdAndDelete(req.params.id);
    res.send({ msg: `Address deleted successfully` });
  } 
  catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
});

//empty your address

addressRouter.delete("/deleteAll", authenticate, async (req, res) => {
  try {
    const userId = req.body.userID;
    await AddressModel.deleteMany({
      userID: userId,
    });
    res.send({ msg: "All Item Deleted" });
  } 
  catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = { addressRouter };
