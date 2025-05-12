import { Router } from "express";
import { getUserProfile } from "../controllers/user/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/me", authMiddleware, getUserProfile); 

export default router;