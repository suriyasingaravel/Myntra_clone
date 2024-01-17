const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    userID: String,
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
    // discount:{type:Number}
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
