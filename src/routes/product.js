const router = require("express").Router();
const controller = require("../controllers/productController");
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken")


router.post("/create", verifyTokenAndAdmin, controller.create);
router.put("/:id", verifyTokenAndAdmin, controller.updateProduct);
router.delete("/:id", verifyTokenAndAdmin, controller.deleteProduct);
router.get("/:id", controller.findProduct);
router.get("/", controller.allProducts);


module.exports = router;