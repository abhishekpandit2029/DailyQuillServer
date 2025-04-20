export const typingIndicatorSocket = async (socket) => {
    socket.on("typing", ({ fromUserId, toUserId }) => {
        socket.broadcast.emit("typing-status", { fromUserId, toUserId });
    });

    socket.on("disconnect", () => {
        console.log("❌ Client disconnected:", socket.id);
    });
};
