import { Router } from "express";
import { registerUser,loginUser } from "../../services/auth/authService.js";

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

router.post("/login", async (req, res) => {
  try {
    const result = await loginUser(req.body);
    res.status(200).json({
      message: result.message,
      token: result.token, // Retorna o token JWT
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