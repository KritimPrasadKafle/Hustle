import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  specializedIn: [{
    type: String,
    required: true,
  }]
}, { timestamps: true })

export const Hospital = mongoose.model("Hospital", "hospitalSchema");