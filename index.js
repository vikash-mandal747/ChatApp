const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const app = express();//I need express app but not express server, hence no app.listen
//http server as well , since socket are upgraded http protocol
const server = http.createServer(app);
//http's server runs over express app, so that i can apply middleware in future

const io = new Server(server, {
    cors: {
        origin: "http://127.0.0.1:5500",
        method: ["GET", "POST"]
    }
});//Socket.io's is created over http server

app.use(cors())

//socket events here, io is the main chat server
io.on("connection", (socket) => {
    //socket means client
    console.log("socket connected", socket.id);

    socket.on("regName", (name) => {
        console.log(name);
    })

    socket.on("sendMessage", (message) => {
        console.log(message);
    })

})

server.listen(9000, () => {
    console.log("server started");
})