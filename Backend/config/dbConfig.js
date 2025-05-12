import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)


const dbConnection = mongoose.connection;

db.on('conectado', ()  => {
  console.log('Conectado no Banco');
})

db.on('error', (error) => {
  console.log('Erro na conexão com o banco: ' + error);
})

module.exports = dbConnection;