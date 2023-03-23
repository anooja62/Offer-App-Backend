/** @format */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Cors = require("cors");
const dotenv = require("dotenv");
const Offer = require("./offermodel");
const app = express();
const port = 8000;
dotenv.config();
app.use(express.json());
app.use(Cors({origin:['https://localhost:300','https://offer-create-app.onrender.com/']}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
const MONGO_URI =
  "mongodb+srv://offercreation:TcLi7g5hXGVKhHHh@cluster0.giiqy2s.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected  to mongodb !!"))

  .catch((err) => console.log(err.message));

app.post("/offers", async (req, res) => {
  try {
    const offer = new Offer({
      offerCode: req.body.offerCode,
      offerTitle: req.body.offerTitle,
      offerDescription: req.body.offerDescription,
      offerType: req.body.offerType,
      discountPercentage: req.body.discountPercentage,
      applicableOn: req.body.applicableOn,
      minOrderValue: req.body.minOrderValue,
      maxDiscount: req.body.maxDiscount,
      startDate: req.body.startDate,
      expirationDate: req.body.expirationDate,
      numberOfCustomers: req.body.numberOfCustomers,
      totalCustomers: req.body.totalCustomers,
      usePerCustomers: req.body.usePerCustomers,
      usagePerCustomers: req.body.usagePerCustomers,
    });
    const newOffer = await offer.save();
    res.status(201).json(newOffer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.get("/all-offers", async (req, res) => {
    try {
      const offers = await Offer.find();
      res.status(200).json(offers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
app.listen(port, () => {
  console.log(`listening in : ${port}`);
});
