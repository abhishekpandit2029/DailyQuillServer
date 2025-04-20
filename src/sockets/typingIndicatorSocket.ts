import { Server, Socket } from "socket.io";

export const typingIndicatorSocket = async (io: Server, socket: Socket) => {
    socket.on("typing", ({ fromUserId, toUserId }) => {
        socket.broadcast.emit("typing-status", { fromUserId, toUserId });
    });

    socket.on("disconnect", () => {
        console.log("❌ Client disconnected:", socket.id);
    });
};
