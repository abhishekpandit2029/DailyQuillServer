const onlineUsers = new Map();

export const onlineStatusSocket = async (socket) => {

    socket.on("userOnline", (data) => {
        onlineUsers.set(socket.id, data);
        socket.broadcast.emit("userOnline", Array.from(onlineUsers.values()));
    });

    socket.on("disconnect", () => {
        onlineUsers.delete(socket.id);
        socket.broadcast.emit("userOnline", Array.from(onlineUsers.values()));
    });
};
