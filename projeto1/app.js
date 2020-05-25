const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')

const databaseConfig = require('./config/database')
const routes = require('./routes')

app.use(express.json());

app.use(cors())

mongoose.connect(
  databaseConfig.baseUrl,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });

  app.use(routes)

module.exports = app;