/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = 4001;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
    console.log('hi')
    console.log("New client connected");

    socket.on("outgoing call", (data)=>{
       socket.broadcast.emit("incoming call", data);
    });

    socket.on("callee has answered", (data)=>{
       socket.broadcast.emit("render call pane on answer", data);
    });

    socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));