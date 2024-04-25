import express from "express";
import productController from "./controllers/product.controller.js";
const productRouter = express.Router();

//GET Method

productRouter.get("/", productController.getProduct)
productRouter.post("/add", productController.addProduct) 
productRouter.patch("/:id", productController.updateProduct)

export default productRouter;
