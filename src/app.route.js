import express from "express";
import productRouter from "./modules/product/product.route.js";
import statusRouter from "./modules/status/status.route.js";
import AppMiddleWare from "./app.middleware.js";
import userRouter from "./modules/user/user.route.js";

const AppRouter = express();
AppRouter.use(AppMiddleWare);
AppRouter.use('/product', productRouter)
AppRouter.use('/status', statusRouter)
AppRouter.use('/user', userRouter)


export default AppRouter