const io = require('socket.io')();

let _secret = '';

io.on('connection', (client) => {
  client.on('sendText', (text) => {
      io.emit('sendText', text);
  });

  client.on('createSecret', (secret) => {
    _secret = secret
    client.emit('createSecret', _secret);
  });

  client.on('getSecret', () => {
    client.emit('getSecret', _secret);
  });
})

const port = 8000;
io.listen(port);

console.log('server.js - listening on port: ', port);