import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dagonsedWith: {
    type: String,
    required: true,
  }, address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bllodGroup: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F", "O"]
  },
  admittedIn: {
    type: mongoose.Schema.ObjectId,
    ref: 'Hospital',
  },

}, { timestamps: true })

export const Patient = mongoose.model("Patient", "patientSchema");