const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  address: {
    type: "string",
    required: true,
  },
  city: {
    type: "string",
    required: true,
  },
  postalCode: {
    type: "string",
    required: true,
  },
  tel: {
    type: "string",
    required: true,
  },
  token: {
    type: "string",
  },
});

const Member = mongoose.model("Member", productSchema);

module.exports = Member;
