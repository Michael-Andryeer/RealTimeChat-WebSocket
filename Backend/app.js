import express from "express";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

// Rotas
app.use("/api/auth", authRoutes); 
app.use("/api/user", userRoutes); 

export default app;