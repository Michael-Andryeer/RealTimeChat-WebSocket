import  express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API rodando...');
})

export default app;