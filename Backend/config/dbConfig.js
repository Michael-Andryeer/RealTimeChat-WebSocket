// filepath: /home/michael/Documentos/Projetos/WebSocket/Backend/config/dbConfig.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conexão com o banco de dados estabelecida com sucesso!");

    const db = mongoose.connection;

    db.on("connected", () => {
      console.log("Conectado no Banco");
    });

    db.on("error", (error) => {
      console.error("Erro na conexão com o banco: " + error);
    });
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error.message);
    process.exit(1); // Encerra o processo se a conexão falhar
  }
};

export default connectDB;