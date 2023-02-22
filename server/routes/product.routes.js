const express = require("express");
const Product = require("../models/Product");
const router = express.Router({ mergeParams: true });

router.get("/", async function (req, res) {
  try {
    const category = req.query.category;
    const list = await Product.find({ category });
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
