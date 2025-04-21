export const typingIndicatorSocket = (socket) => {
    socket.on("typing", ({ fromUserId, toUserId }) => {
        socket.broadcast.emit("typing-status", { fromUserId, toUserId });
    });

    socket.on("disconnect", () => { });
};
