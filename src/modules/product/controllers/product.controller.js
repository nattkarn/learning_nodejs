import products from "../../../common/mock-data/product.json" assert { type: "json" };
import ProductService from "../service/product.service.js";

const productController = {
  getProduct: async (req, res) => {
    const product = await ProductService.getAll();
    // res.status(200).send(product);
    res.status(200).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: product,
      }
    })
  },
  getProductById: async (req, res) => {
    const { id } = req.params;
    const product = await ProductService.getOne(id);
    res.status(200).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: product,
      }
    })
  },
  findTitleProduct: async (req, res) => {
    const { title } = req.body;
    // const jsonString = JSON.stringify(); //convert json to jsonString
    // const jsonObj = JSON.parse({ title })
    const product = await ProductService.findProduct({ title });
    res.status(201).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: product,
      }
    })
  },
  addProduct: async (req, res) => {
    const { title, description, price } = req.body;
    const created = await ProductService.create({ title, description, price });
    res.status(201).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: created,
      },
    });
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const { description } = req.body;
    const { price } = req.body;
    const productIndex = products.findIndex((product) => product.id == id);
    const results = products;
    results[productIndex] = {
      ...results[productIndex],
      title,
      description,
      price,
    };
    res.status(201).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: results,
      },
    });
  },
  deleteProduct: (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => product.id == id);
    const delProduct = ProductService.delProduct(id)
    res.status(201).json({
      success: true,
      timestamp: new Date(),
      data: {
        result: productIndex,
      },
    });
  },
};
export default productController;
