const express = require('express');

const server = express();

server.listen(3000);

server.get('/', (req, res) => {
  res.send('Testing git, first feature');
})