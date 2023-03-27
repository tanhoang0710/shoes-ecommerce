const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Protected Routes token base
exports.requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    return res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

//admin access
exports.isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(403).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
