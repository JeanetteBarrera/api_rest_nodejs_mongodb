import { Router } from "express";
import controller from "../controllers/usersController";

const router = Router();


router.get("/signin", controller.signin);
router.post("/signin", controller.processSignin);

router.get("/login", controller.login);
router.post("/login", controller.processLogin);

router.get("/profile", controller.profile);
router.get("/profile/:id", controller.editProfile);
router.put("/profile/:id", controller.updateProfile);
router.delete("/profile/:id", controller.deleteProfile);

router.get("/clouthing/likes", controller.allLikesProducts);
router.get("/clouthing/recommended", controller.recommended);



export default router;