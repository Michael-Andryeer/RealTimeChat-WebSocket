import { Router } from "express";
import { registerUser } from "../services/authService.js";

const router = Router();

// Rota POST para cadastro de usuários
router.post("/signup", async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.status(201).json({
      message: result.message,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});

export default router;