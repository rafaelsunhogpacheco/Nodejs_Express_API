const Product = require('../models/schemaProduct');

const productController = {
  async getAll(req, res) {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const { product_name, product_desc, quantity, price } = req.body;
      const product = await Product.create({
        product_name,
        product_desc,
        quantity,
        price,
      });
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { product_name, product_desc, quantity, price } = req.body;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      const updatedProduct = await product.update({
        product_name,
        product_desc,
        quantity,
        price,
      });
      return res.json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await product.destroy();
      return res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = productController;
