import { Router } from "express";
import controller from "../controllers/indexController";

const router = Router();


router.get("/", controller.index);


export default router;