const express = require('express');

const server = express();

server.listen(3000);

server.get('/', (req, res) => {
  res.send('Testing git, first feature');
})

server.get('/bye', (req, res) => {
  res.send('Bye, world!?');
})
server.get('/hello', (req, res) => {
  res.send('Hello, is it me yr looking for?')
})