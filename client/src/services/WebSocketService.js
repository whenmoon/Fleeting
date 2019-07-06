import socketIOClient from "socket.io-client";

import {
  SOCKET_SERVER_BASE_URL
} from '../config';

const socket = socketIOClient(SOCKET_SERVER_BASE_URL);

export const listenForIncomingCall = (toggleFlag) => {
  socket.on("incoming call", data => {
    window.confirm(`Tom is calling you, do you want to answer?`)
    toggleFlag(data)
  })
}

export const makeOutGoing = (data) => {
  socket.emit('outgoing call', data);
}
