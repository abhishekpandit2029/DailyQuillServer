import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { onlineStatusSocket } from "./sockets/onlineStatusSocket.js";
import { typingIndicatorSocket } from "./sockets/typingIndicatorSocket.js";


const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 4000;

const io = new Server(server, {
    cors: {
        origin: "https://dailyquill.vercel.app",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

app.use(cors({
    origin: "https://dailyquill.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
}));

io.on("connection", async (socket) => {
    await onlineStatusSocket(io, socket);
    await typingIndicatorSocket(io, socket);
});

server.listen(PORT);


