const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    image_url: { type: Array, required: true },
    brand: { type: String, required: true },
    subtext: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    offer: { type: Number, required: true },
    category: { type: String, required: true },
    no_of_rating:{ type: Number, required: true },
    gender: { type: String },
    rating:{type:Number},
},
{
  versionKey: false,
}
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
