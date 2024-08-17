const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});