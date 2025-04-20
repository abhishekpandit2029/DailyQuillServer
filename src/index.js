import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import { corsOptions } from "./utils/corsOptions";
import { onlineStatusSocket } from "./sockets/onlineStatusSocket";
import { typingIndicatorSocket } from "./sockets/typingIndicatorSocket";

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 4000;

const io = new Server(server, {
    cors: corsOptions,
});

app.use(cors(corsOptions));

io.on("connection", async (socket) => {
    await onlineStatusSocket(io, socket);
    await typingIndicatorSocket(io, socket);
});

server.listen(PORT);


