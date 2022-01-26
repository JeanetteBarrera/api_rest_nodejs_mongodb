import { Router } from "express";
import controller from "../controllers/productController";

const router = Router();


router.get("/", controller.list);
router.get("/search", controller.search);





export default router;