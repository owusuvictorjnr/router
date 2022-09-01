const getProducts = (req, res) => {
  res.status(200).send("Welcome to my server");
};

const createProduct = (req, res) => {
  res.status(201).send("Your data has been saved");
};

const updateProduct = (req, res) => {
  res.status(200).send("Data has been patched successfully");
};

const deleteProduct = (req, res) => {
  res.status(200).send("Data has been delete successfully");
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
