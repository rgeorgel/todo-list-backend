const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

const port = process.env.port || 3003
server.listen(
  port,
  function() {
    console.log(`Todo-list Backend is running on port ${port}`);
  }
);

module.exports = server;