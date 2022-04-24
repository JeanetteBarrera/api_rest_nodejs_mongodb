const router = require("express").Router()
const controller = require("../controllers/usersController");

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/verifyToken")

router.get("/", verifyTokenAndAdmin, controller.findAll);
router.get("/stats", verifyTokenAndAdmin, controller.stats)
router.get("/:id", verifyTokenAndAdmin, controller.findUser);
router.put("/:id", verifyToken, controller.updateUser);
router.delete("/:id", verifyTokenAndAuthorization, controller.deleteProfile);


module.exports = router;