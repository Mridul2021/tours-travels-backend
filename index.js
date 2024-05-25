const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './secrets.env' });
var app = express();
const PORT = process.env.PORT || 3000;
dotenv.config({ path: './secrets.env' });
console.log('Loaded .env file:', process.env.PORT);

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/root'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });