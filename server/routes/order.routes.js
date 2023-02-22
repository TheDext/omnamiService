const express = require("express");
const Order = require("../models/Order");
const router = express.Router({ mergeParams: true });

router.get("/", async function (req, res) {
  try {
    const list = await Order.find();
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
