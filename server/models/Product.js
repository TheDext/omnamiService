const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    category: String,
    name: String,
    price: Number,
    composition: String,
    weight: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", schema);
