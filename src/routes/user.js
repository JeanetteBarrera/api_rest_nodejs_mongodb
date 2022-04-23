const router = require("express").Router()
const controller = require("../controllers/usersController");

const path = 'user'

router.get(
    `${path}/signin`, controller.signin
)


/*

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
*/


export default router;