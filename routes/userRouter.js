const router = require("express").Router();
const authController = require("../controllers/authController");
const controller = require("../controllers/userController");
router.post("/signup", authController.signup);
router.get("/", controller.getAllUsers);

module.exports = router;
