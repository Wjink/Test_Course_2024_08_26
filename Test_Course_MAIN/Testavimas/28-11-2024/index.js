// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// In-memory data store for products
let products = [];
let idCounter = 1;

// CREATE: Add a new product
app.post('/products', (req, res) => {
    const { name, description, price, quantity } = req.body;
    if (!name || !description || price === undefined || quantity === undefined) {
        return res.status(400).json({ 
            error: 'Name, description, price, and quantity are required.' 
        });
    }
    if (price < 0 || quantity < 0) {
        return res.status(400).json({ 
            error: 'Price and quantity must be non-negative values.' 
        });
    }

    const newProduct = { id: idCounter++, name, description, price, quantity };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// READ: Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// READ: Get a single product by ID
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === parseInt(id));
    if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
    }
    res.json(product);
});

// UPDATE: Update a product by ID
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;

    const productIndex = products.findIndex((p) => p.id === parseInt(id));
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found.' });
    }
    if (price !== undefined && price < 0 || quantity !== undefined && quantity < 0) {
        return res.status(400).json({ 
            error: 'Price and quantity must be non-negative values.' 
        });
    }

    const updatedProduct = {
        ...products[productIndex],
        ...(name && { name }),
        ...(description && { description }),
        ...(price !== undefined && { price }),
        ...(quantity !== undefined && { quantity }),
    };

    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
});

// DELETE: Remove a product by ID
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id === parseInt(id));
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found.' });
    }
    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct[0]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});