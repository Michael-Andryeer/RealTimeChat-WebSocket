import User from "../../models/user.js";

/**
 * @param {String} userId 
 * @returns {Object} 
 */
export const getUserById = async (userId) => {
  try {

    const user = await User.findById(userId).select("-password -__v"); // Exclui o campo "password"

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};