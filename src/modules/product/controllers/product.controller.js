import products from '../../../common/mock-data/product.json' assert { type: "json" };

const productController = {
  getProduct: (req, res) => {
    res.status(200).send(products);
  },

  addProduct: (req, res) => {
    const { id, title, description, price } = req.body;
    const result = [...products, { id, title, description, price }];
    res.status(201).json({
      success: true,
      data: {
        timestamp: new Date(),
        result: result,
      },
    });
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const { description } = req.body
    const { price } = req.body
    const productIndex = products.findIndex((product) => product.id == id);
    const results = products;
    results[productIndex] = { ...results[productIndex], title , description, price};
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
