const express = require("express");
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// routing
// Register || Method POST
router.post("/register", registerController);

// Login || Method POST
router.post("/login", loginController);

// test routes
//test routes
router.get("/test", requireSignIn, isAdmin, testController);
module.exports = router;
