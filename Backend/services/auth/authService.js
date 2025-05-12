import User from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @param {Object} userData - Dados do usuário (firstname, lastname, email, password)
 * @returns {Object} - Mensagem de sucesso ou erro
 */
export const registerUser = async (userData) => {
  const { firstname, lastname, email, password } = userData;

  if (!firstname || !lastname || !email || !password) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Usuário já cadastrado.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return { message: "Usuário cadastrado com sucesso!" };
};

/**
 * Realizar login do usuário
 * @param {Object} loginData - Dados de login (email, password)
 * @returns {Object} - Mensagem de sucesso ou erro
 */
export const loginUser = async (loginData) => {
  const { email, password } = loginData;

  if (!email || !password) {
    throw new Error("E-mail e senha são obrigatórios.");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Senha inválida.");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    }, // payload da requisiçao
    process.env.JWT_SECRET, // chave secreta
  )

  return { message: "Login realizado com sucesso!",
    token
   };
};