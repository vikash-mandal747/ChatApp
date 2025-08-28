const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

const io = new Server(3000, server);//Socket.io's is created over http server

server.listen(8080,()=>{
    console.log("server started");
})