const express = require("express");
const router = express.Router();

const {
  welcome
  } = require("../controller/memberController");

  router.post("/", welcome);


  module.exports = router;