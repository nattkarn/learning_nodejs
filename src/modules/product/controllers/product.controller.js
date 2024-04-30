import products from "../../../common/mock-data/product.json" assert { type: "json" };
import ProductService from "../service/product.service.js";

const productController = {
  getProduct: (req, res) => {
    res.status(200).send(products);
  },

  addProduct: async (req, res) => {
    const { title, description, price } = req.body;
    const created = await ProductService.create({ title, description, price });
    res.status(201).json({
      success: true,
      data: {
        timestamp: new Date(),
        data: created,
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
      data: {
        timestamp: new Date(),
        result: results,
      },
    });
  },
  deleteProduct: (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => product.id == id);

    res.status(201).json({
      success: true,
      data: {
        timestamp: new Date(),
        result: productIndex,
      },
    });
  },
};
export default productController;
