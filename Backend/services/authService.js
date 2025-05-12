import User from "../models/user.js";
import bcrypt from "bcrypt";

/**
 * Cadastrar um novo usuário
 * @param {Object} userData - Dados do usuário (firstname, lastname, email, password)
 * @returns {Object} - Mensagem de sucesso ou erro
 */
export const registerUser = async (userData) => {
  const { firstname, lastname, email, password } = userData;

  // Validação básica
  if (!firstname || !lastname || !email || !password) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  // Verificar se o usuário já existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Usuário já cadastrado.");
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar e salvar o novo usuário
  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return { message: "Usuário cadastrado com sucesso!" };
};