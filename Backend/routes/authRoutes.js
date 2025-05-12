import { Router } from "express";
import { registerUser, loginUser } from "../services/auth/authService.js";


const router = Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;