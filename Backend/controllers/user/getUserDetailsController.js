import { getUserById } from "../../services/user/getUserDetailsService.js";


export const getUserProfile = async (req, res) => {
  try {
    const user = await getUserById(req.user.id);

    res.status(200).json({
      message: "Informações do usuário listadas com sucesso!.",
      user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao recuperar informações do usuário.",
      error: error.message,
      success: false,
    });
  }
};