import jwt from 'jsonwebtoken'

export const authMiddleware = (request,response,next) => {
  try {
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      return response.status(401).json({ message: 'Acesso negado,Token não fornecido', sucess: false });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    request.user = decoded;

    next();
  } catch (error) {
    return response.status(401).json({ message: 'Token inválido', sucess: false });
  }
}