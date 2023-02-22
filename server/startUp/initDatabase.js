const Product = require("../models/Product");

const productsMock = [
  ...require("../mock/combo.json"),
  ...require("../mock/pizza.json"),
  ...require("../mock/rolls.json"),
  ...require("../mock/sets.json"),
  ...require("../mock/snacks.json"),
];

module.exports = async () => {
  const products = await Product.find();
  if (products.length !== productsMock.length) {
    await createInitilEntity(Product, productsMock);
  }
};

async function createInitilEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
