import express from "express";
import productController from "./controllers/product.controller.js";
import {createValidator} from "express-joi-validation"
import { CreateProductValidator, FindByTitleProductValidator, UpdateProductValidator } from "./controllers/validator/product.validator.js";




const productRouter = express.Router();
const validator = createValidator({})


productRouter.get("/", productController.getProduct)
productRouter.get("/:id", productController.getProductById)
productRouter.post("/title", validator.body(FindByTitleProductValidator), productController.findTitleProduct)
productRouter.post("/add", validator.body(CreateProductValidator), productController.addProduct) 
productRouter.patch("/update/:id", validator.body(UpdateProductValidator), productController.updateProduct)
productRouter.delete("/delete/:id", productController.deleteProduct)

export default productRouter;
