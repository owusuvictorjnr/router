const router = require("express").Router;

const {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} = require("../controllers/users.controller");

const userRouter = router();

userRouter.get("/", getUsers);
// userRouter.get("/:userId", getUsers);
userRouter.post("/", createUser);
userRouter.patch("/", updateUser);
userRouter.delete("/", deleteUser);
// userRouter.patch("/:userId", updateUser);
// userRouter.delete("/:userId", deleteUser);

module.exports = userRouter;
