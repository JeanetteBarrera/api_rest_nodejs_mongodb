import { Router } from "express";
import controller from "../controllers/adminController";

const router = Router();


router.get("/", controller.index);

router.get("/products", controller.listProducst);

router.get("/products/:search", controller.search);


/***********    ABM PRODUCTS    **********/
/*****************************************/

router.get("/product", controller.createProduct);

router.post("/product", controller.storeProduct);

router.get("/product/:id", controller.editProduct);

router.put("/product/:id", controller.updateProduct);

router.delete("/product/:id", controller.deleteProduct);


/***********   ABM CATEGORIES   **********/
/*****************************************/

router.get("/categories", controller.listCategories);

// solo tienen acceso un usuario con rol super-admin a los end-points siguientes

router.get("/category", controller.createCategory);

router.post("/category", controller.storeCategory);

router.get("/category/:id", controller.editCategory);

router.put("/category/:id", controller.updateCategory);

router.delete("/category/:id", controller.deleteCategory);


/************   CREATE USER-ROL-ADMIN    ***********/
/***************************************************/
router.get("/accounts/customers", controller.listCustomers);
router.get("/accounts", controller.listUserAdmin);

// solo tiene acceso un usuario con rol super-admin a los links de abajo

router.get("/account", controller.createUserAdmin);

router.post("/account", controller.storeUserAdmin);

router.get("/account/:id", controller.editUserAdmin);

router.put("/account/:id", controller.updateUserAdmin);

router.delete("/account/:id", controller.deleteUserAdmin);


export default router;