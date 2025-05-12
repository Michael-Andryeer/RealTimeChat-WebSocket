// filepath: /home/michael/Documentos/Projetos/WebSocket/Backend/server.js
import app from "./app.js";
import { config } from "dotenv";
import connectDB from "./config/dbConfig.js";

config();

const startServer = async () => {
  await connectDB();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
};

startServer();