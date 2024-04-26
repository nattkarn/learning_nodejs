import express from "express";
import productController from "./controllers/product.controller.js";
import {createValidator} from "express-joi-validation"
import CreateProductValidator from "./controllers/validator/create-product.validator.js";
import UpdateProductValidator from "./controllers/validator/update-product.valadator.js";



const productRouter = express.Router();
const validator = createValidator({})


productRouter.get("/", productController.getProduct)
productRouter.post("/add", validator.body(CreateProductValidator), productController.addProduct) 
productRouter.patch("/:id", validator.body(UpdateProductValidator), productController.updateProduct)

export default productRouter;
