import Chat from "../../models/chat.js";
import Message from "../../models/message.js";

/**
 * Cria um novo chat
 * @param {Object} chatData - Dados do chat
 * @returns {Object} - Chat criado
 */
export const createNewChat = async (chatData) => {
  const chat = new Chat(chatData);
  const savedChat = await chat.save();
  await savedChat.populate("members");
  return savedChat;
};

/**
 * Busca todos os chats de um usuário
 * @param {String} userId - ID do usuário
 * @returns {Array} - Lista de chats
 */
export const getAllChats = async (userId) => {
  const allChats = await Chat.find({ members: { $in: userId } })
    .populate("members")
    .populate("lastMessage")
    .sort({ updatedAt: -1 });
  return allChats;
};

/**
 * 
 * @param {String} chatId 
 * @returns {Object} 
 */
export const clearUnreadMessages = async (chatId) => {
  const chat = await Chat.findById(chatId);
  if (!chat) {
    throw new Error("Nenhum chat encontrado com o ID fornecido.");
  }

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { unreadMessages: 0 },
    { new: true }
  )
    .populate("members")
    .populate("lastMessage");

  await Message.updateMany({ chatId: chatId, read: false }, { read: true });

  return updatedChat;
};