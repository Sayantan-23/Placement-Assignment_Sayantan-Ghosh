import express from "express";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
import { newOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/order/new", isAuthenticatedUser, newOrder);

export default router;
