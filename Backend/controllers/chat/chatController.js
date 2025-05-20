import {
  createNewChat,
  getAllChats,
  clearUnreadMessages,
} from "../../services/chat/chatService.js";

/**
 * Controlador para criar um novo chat
 */
export const createNewChatController = async (req, res) => {
  try {
    const chat = await createNewChat(req.body);
    res.status(201).json({
      message: "Chat criado com sucesso!",
      success: true,
      data: chat,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

/**
 * Controlador para buscar todos os chats de um usuário
 */
export const getAllChatsController = async (req, res) => {
  try {
    const chats = await getAllChats(req.body.userId);
    res.status(200).json({
      message: "Chats recuperados com sucesso!",
      success: true,
      data: chats,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

/**
 * Controlador para limpar mensagens não lidas
 */
export const clearUnreadMessagesController = async (req, res) => {
  try {
    const updatedChat = await clearUnreadMessages(req.body.chatId);
    res.status(200).json({
      message: "Mensagens não lidas limpas com sucesso!",
      success: true,
      data: updatedChat,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};