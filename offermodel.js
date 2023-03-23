/** @format */

const mongoose = require("mongoose");
const offerSchema = mongoose.Schema(
  {
    offerCode: {
      type: String,
      required: true,
      maxlength: 8,
    },
    offerTitle: {
      type: String,
      required: true,
      maxlength: 60,
    },
    offerDescription: {
      type: String,
      maxlength: 140,
    },
    offerType: {
      type: String,
      required: true,
     
    },
    discountPercentage: {
      type: Number,
      required: true,
    },
    applicableOn: {
      type: String,
      
    },
    minOrderValue: {
      type: Number,
      required: true,
    },
    maxDiscount: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
    },
    expirationDate: {
      type: Date,
    },
    numberOfCustomers: {
      type: String,
    },
    totalCustomers: {
      type: Number,
    },
    usePerCustomers: {
      type: String,
    },
    usagePerCustomers: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offer", offerSchema);
