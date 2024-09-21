import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { config } from './config/config.js';

const setupSocket = (server: http.Server) => {
    const io = new SocketIOServer(server, {
        cors: {
            origin: config.ORIGIN,
            methods: ["GET", "POST"],
            credentials: true,
        },
    })

    io.on("connection", () => {
        console.log('socket is connecting...');
    })
}

export default setupSocket