const express = require('express');
const mongoose = require('mongoose');
const databaseConfig = require('./config/database');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes)

mongoose.connect(
  databaseConfig.baseUrl,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });



module.exports = app;