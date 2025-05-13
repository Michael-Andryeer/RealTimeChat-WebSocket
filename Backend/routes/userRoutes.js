import { Router } from "express";
import { getUserProfile } from "../controllers/user/getUserDetailsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getAllUsersController } from "../controllers/user/getAllUsersController.js";

const router = Router();

router.get("/me", authMiddleware, getUserProfile); 
router.get("/", authMiddleware, getAllUsersController); // Rota para listar todos os usuários

export default router;