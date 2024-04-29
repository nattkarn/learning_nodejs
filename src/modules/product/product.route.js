import express from "express";
import productController from "./controllers/product.controller.js";
import {createValidator} from "express-joi-validation"
import CreateProductValidator from "./controllers/validator/create-product.validator.js";
import { UpdateProductValidator } from "./controllers/validator/update-product.validator.js";



const productRouter = express.Router();
const validator = createValidator({})


productRouter.get("/", productController.getProduct)
productRouter.post("/add", validator.body(CreateProductValidator), productController.addProduct) 
productRouter.patch("update/:id", validator.body(UpdateProductValidator), productController.updateProduct)
productRouter.delete("delete/:id", productController.deleteProduct)

export default productRouter;
