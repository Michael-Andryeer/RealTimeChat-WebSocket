import { getUserById } from "../../services/user/getUserDetailsService.js";
import { getAllUsersService } from "../../services/user/getAllUsersService.js";

export const getAllUsersController = async (request,response) => {
  try {
    const users = await getAllUsersService();

    response.status(200).json({
      message: "Usuários listados com sucesso!",
      users,
      success: true,
    });
  } catch (error) {
    response.status(500).json({
      message: "Erro ao listar usuários.",
      error: error.message,
      success: false,
    });
  }
}