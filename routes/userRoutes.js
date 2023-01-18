const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/UserCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();
//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);
module.exports = router;

//Auth || Post
router.post("/getUserData", authMiddleware, authController);
module.exports = router;
