import { Router } from "express";
import {
  createNewChatController,
  getAllChatsController,
  clearUnreadMessagesController,
} from "../controllers/chat/chatController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

// Rota para criar um novo chat
router.post("/create-new-chat", authMiddleware, createNewChatController);

// Rota para buscar todos os chats de um usuário
router.get("/get-all-chats", authMiddleware, getAllChatsController);

// Rota para limpar mensagens não lidas
router.post("/clear-unread-message", authMiddleware, clearUnreadMessagesController);

export default router;