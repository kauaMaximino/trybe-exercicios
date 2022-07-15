const express = require('express');
const cors = require('cors');
const userRouter = require('../src/routes/user.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);

module.exports = app;
