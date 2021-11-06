const express = require("express");
const router = express.Router();

const { register } = require("../controller/memberController");

router.post("/", register);

module.exports = router;
