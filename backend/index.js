import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  res.send('Dockerizing Node Application');
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0',  () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors({
  origin: 'http://localhost:3000', // ou 5173, 4200, etc.
  credentials: true
}));