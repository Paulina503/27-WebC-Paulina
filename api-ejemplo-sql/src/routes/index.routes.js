import { Router } from "express";
import { methods as productController} from "../controllers/product.controller";

const router = Router()

// Uri inicial es http://1237.0.0.1:4000/api-retful/prducts

/** Creamos nuestras rutas */
router.get("/allProducts", productController.getAllProducts); // GET http://1237.0.0.1:4000/api-retful/allPrducts

export default router;

