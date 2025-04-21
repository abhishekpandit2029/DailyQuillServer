const onlineUsers = new Map();

export const onlineStatusSocket = (socket) => {
    socket.on("userOnline", (userData) => {
        onlineUsers.set(userData?.userId, userData);
        socket.emit("userOnline", Array.from(onlineUsers.values()));
    });

    socket.on("disconnect", (userData) => {
        onlineUsers.delete(userData?.userId);
        socket.emit("userOnline", Array.from(onlineUsers.values()));
    });
};
