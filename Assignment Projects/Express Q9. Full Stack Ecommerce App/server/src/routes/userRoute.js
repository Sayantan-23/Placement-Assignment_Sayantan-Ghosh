import express from "express";
import {
  deleteUser,
  forgotPassword,
  getAllUsers,
  getSingleUser,
  getUserDetail,
  loginUser,
  logout,
  registerUser,
  resetPassword,
  updatePassword,
  updateUserProfile,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/password/forgot", forgotPassword);

router.put("/password/reset/:token", resetPassword);

router.get("/logout", logout);

router.get("/me", isAuthenticatedUser, getUserDetail);

router.put("/password/update", isAuthenticatedUser, updatePassword);

router.put("/me/update", isAuthenticatedUser, updateUserProfile);

router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUsers
);

router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleUser
);

router.put(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUserRole
);

router.delete(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser
);

export default router;
