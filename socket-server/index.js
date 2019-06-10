/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

//Port from environment  - 4001
const port = 4001;
//Setting up express and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//Setting up a socket with the namespace "connection" for new sockets
io.on("connection", socket => {
    console.log("New client connected");

    //Here we listen on a new namespace called "incoming data"
    socket.on("outgoing call", (data)=>{
        //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
       socket.broadcast.emit("incoming call", data);
    });

    socket.on("callee has answered", (data)=>{
        //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
       socket.broadcast.emit("render call pane on answer", data);
    });

    //Listen for incoming call url if call answered
    // socket.on("call url", (data) => {
    //   socket.broadcast.emit("outgoing call url", data)
    // })

    //A special namespace "disconnect" for when a client disconnects
    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));