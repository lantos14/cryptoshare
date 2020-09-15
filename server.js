const io = require('socket.io')();

let _secret = '';

io.on('connection', (client) => {
  console.log('client is connected');
  client.on('sendText', (text) => {
    console.log('client is subscribing to text ', text);
      io.emit('sendText', text);
  });

  client.on('createSecret', (secret) => {
    console.log('io secret: ', secret);
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