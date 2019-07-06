/* eslint-disable no-undef */
/* eslint-disable no-console */

const HTTPS_PORT = 8444;

const fs = require('fs');
const http = require('http');
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;

const serverConfig = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

const httpsServer = http.createServer(serverConfig);
httpsServer.listen(HTTPS_PORT, '0.0.0.0');

const wss = new WebSocketServer({server: httpsServer});

wss.on('connection', function(ws) {

  ws.on('message', function(message) {
    wss.broadcast(message);
  });

  ws.on('error', function(error) {
    console.error(error);
  })
});

wss.broadcast = function(data) {
    this.clients.forEach(function(client) {
      if(client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
};

console.log('Listening on port ' + HTTPS_PORT);
