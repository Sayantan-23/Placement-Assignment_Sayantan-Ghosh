import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} from "../controllers/productController.js";
import {authorizeRoles, isAuthenticatedUser} from "../middlewares/auth.js";

const router = express.Router();

router.get("/products",isAuthenticatedUser,authorizeRoles("admin"), getAllProducts);

router.post("/product/new", isAuthenticatedUser, createProduct);

router.put("/product/:id", isAuthenticatedUser, updateProduct);

router.delete("/product/:id", isAuthenticatedUser, deleteProduct);

router.get("/product/:id", getProductDetails);

export default router;
