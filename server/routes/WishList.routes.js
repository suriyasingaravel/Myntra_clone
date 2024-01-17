const express = require("express");
const { WishListModel } = require("../models/Wishlist.model");
const wishListRouter = express.Router();
const { authenticate } = require("../middlewares/Authenticate.middleware");

wishListRouter.get("/", async (req, res) => {
  const wishlist = await WishListModel.find({ userID: req.body.userID });
  res.send({ userID: req.body.userID, wishlist: wishlist });
});

wishListRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const wishlist = await WishListModel.findById(id);
  res.send(wishlist);
});

wishListRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const post = new WishListModel(payload);
    await post.save();
    res.send({ msg: `wishlist Added successfully`, userID: payload.userID });
  } 
  catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

wishListRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  try {
    await WishListModel.findByIdAndUpdate(req.params.id, payload);
    res.send({ msg: `wishlist updated successfully` });
  } 
  catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
});

wishListRouter.delete("/delete/:id", async (req, res) => {
  try {
    await WishListModel.findByIdAndDelete(req.params.id);
    res.send({ msg: `wishlist deleted successfully` });
  } 
  catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
});

//empty your wishlist

wishListRouter.delete("/deleteAll", authenticate, async (req, res) => {
  try {
    const userId = req.body.userID;
    await WishListModel.deleteMany({
      userID: userId,
    });
    res.send({ msg: "All Item Deleted" });
  } 
  catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = { wishListRouter };
