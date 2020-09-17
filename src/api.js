import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8000");

export const subscribeToText = (callback) => {
  socket.on("sendText", (emitObject) => callback(null, emitObject));
};

export const emitText = (emitObject) => {
  socket.emit("sendText", emitObject);
};

export const subscribeToSecret = (callback) => {
  socket.on("createSecret", (secret) => callback(null, secret));
};

export const emitSecret = (secret) => {
  socket.emit("createSecret", secret);
};

export const subscribeToGetSecret = (callback) => {
  socket.on("getSecret", (secret) => callback(null, secret));
};

export const emitGetSecret = () => {
  socket.emit("getSecret");
};
