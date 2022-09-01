const getUsers = (req, res) => {
  res.status(200).send("Hello Vitech Solution! Welcome to my server");
};

const createUser = (req, res) => {
  res.status(201).send("Your data has been saved");
};

const updateUser = (req, res) => {
  res.status(200).send("Data has been patched successfully");
};

const deleteUser = (req, res) => {
  res.status(200).send("Data has been delete successfully");
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
