const express = require("express");
const { userRouter } = require("./routes/Users.routes");
const { productRouter } = require("./routes/Product.routes");
const { cartRouter } = require("./routes/Cart.routes");
const {wishListRouter} = require("./routes/WishList.routes");


const { authenticate } = require("./middlewares/Authenticate.middleware");
const mongoose = require("mongoose");
const cors = require("cors");

const connection = require("./configs/db");

require("dotenv").config();

const app = express();

app.use(cors());

// mongoose.set("strictQuery", true);

app.get("/", (req,res)=>{
    res.send(`Hello Welcome to my Suriya`);
})

app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use(authenticate);
app.use("/cart", cartRouter);
app.use("/wishlist", wishListRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log(`Listening on PORT ${process.env.PORT}`);
  } 
  catch (error) {
    console.log({ msg: "Could not connect to DB", error: error });
  }
  
});
