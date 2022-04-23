const router = require("express").Router();
const controller = require("../controllers/authController")

router.post("/register", controller.register)