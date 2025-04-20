import { Server, Socket } from "socket.io";

interface OnlineUser {
    userId: string;
    isOnline: boolean;
}

const onlineUsers = new Map<string, OnlineUser>();

export const onlineStatusSocket = async (io: Server, socket: Socket) => {

    socket.on("userOnline", (data: OnlineUser) => {
        onlineUsers.set(socket.id, data);
        socket.broadcast.emit("userOnline", Array.from(onlineUsers.values()));
    });

    socket.on("disconnect", () => {
        onlineUsers.delete(socket.id);
        socket.broadcast.emit("userOnline", Array.from(onlineUsers.values()));
    });
};
