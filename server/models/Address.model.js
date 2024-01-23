const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    address: { type: String, required: true },
    name:{ type: String, required: true },
    mobile:{ type: Number, required: true },
    pincode:{ type: Number, required: true },
    state:{ type: String, required: true },
    town:{ type: String, required: true },
    city:{ type: String, required: true },
    default:{ type: Boolean, required: true}
},
{
  versionKey: false,
}
);

const AddressModel = mongoose.model("address", addressSchema);

module.exports = { AddressModel };
