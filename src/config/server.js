const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const port = process.env.port || 3003
server.listen(
  port,
  function() {
    console.log(`Todo-list Backend is running on port ${port}`);
  }
);

module.exports = server;