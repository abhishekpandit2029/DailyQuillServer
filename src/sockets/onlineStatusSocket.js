import { pusherServer } from "../utils/getPusherServer.js";

const onlineUsers = new Map();

export const onlineStatusSocket = (socket) => {
    socket.on("userOnline", (userData) => {
        onlineUsers.set(userData?.userId, userData);
        pusherServer.trigger(`online-user-collection`, "is-user-online",
            Array.from(onlineUsers.values())
        );
    });

    socket.on("disconnect", (userData) => {
        onlineUsers.delete(userData?.userId);
        socket.emit("userOnline", Array.from(onlineUsers.values()));
    });
};
