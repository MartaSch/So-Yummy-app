import express from 'express';

const app = express();

const PORT = Number(process.env.PORT) || 5173;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});