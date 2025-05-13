import User from "../../models/user.js";

/**
 * Lista todos os usuários
 * @returns {Array} - Lista de usuários
 */
export const getAllUsersService = async () => {
  try {
    const users = await User.find().select("-password -__v"); // Exclui o campo "password" e "__v"
    return users;
  } catch (error) {
    throw new Error("Erro ao listar usuários: " + error.message);
  }
}