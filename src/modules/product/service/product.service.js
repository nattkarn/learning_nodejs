import ProductModel from "../models/product.schema.js";

const ProductService = {
  create: (payload) => {
    return new ProductModel(payload).save();
  },
};

export default ProductService;
