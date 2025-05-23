import PusherServer from "pusher";
import dotenv from 'dotenv';

dotenv.config();

export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: "ap2",
});