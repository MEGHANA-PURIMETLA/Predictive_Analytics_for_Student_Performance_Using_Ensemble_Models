const express = require("express");
const router = express.Router();

const {
  predictResult,
} = require("../controllers/predictionController");

router.post("/predict", predictResult);

module.exports = router;