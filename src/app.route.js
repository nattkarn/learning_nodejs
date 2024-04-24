import express from "express";
import productRouter from "./modules/product/controllers/product.route.js";


const AppRouter = express();

AppRouter.use('/product', productRouter)



export default AppRouter