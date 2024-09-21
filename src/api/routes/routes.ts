import { Application } from "express";
import authRouter from './authRouter.js'
import userRouter from './userRouter.js'
import messageRouter from './messageRouter.js'
import channelRouter from './channelRouter.js'
import { notFound } from "../middlewares/errorMiddleware.js";

export default (app: Application) => {
    app.use('/api/auth', authRouter)
    app.use('/api/users', userRouter)
    app.use('/api/messages', messageRouter)
    app.use('/api/channels', channelRouter)
    app.use(notFound)
}