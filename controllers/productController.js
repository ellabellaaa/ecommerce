const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, description, price, stock, image_url } = req.body;
    const product = await createProduct(name, description, price, stock, image_url);
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const editProduct = async (req, res) => {
  try {
    const { name, description, price, stock, image_url } = req.body;
    const product = await updateProduct(req.params.id, name, description, price, stock, image_url);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeProduct = async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProducts, getProduct, addProduct, editProduct, removeProduct };