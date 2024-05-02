import ProductModel from "../models/product.schema.js";

const ProductService = {
  create: (payload) => {
    return new ProductModel(payload).save();
  },
  getAll: () =>{
    return ProductModel.find()
  },
  getOne: (id) => {
    return ProductModel.findById(id)
  },
  findProduct: ({title}) => {
    return ProductModel.find({ title })
  },
  delProduct: (id) =>{
    return ProductModel.deleteOne(id)
  }
};

export default ProductService;
