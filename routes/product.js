const express = require("express");
const router = express.Router();

// Product Data (10 Records)
let products = [
    {
        id: 1,
        name: "Rice",
        category: "Grocery",
        price: 65,
        stock: 100
    },
    {
        id: 2,
        name: "Sugar",
        category: "Grocery",
        price: 45,
        stock: 150
    },
    {
        id: 3,
        name: "Milk",
        category: "Dairy",
        price: 32,
        stock: 80
    },
    {
        id: 4,
        name: "Bread",
        category: "Bakery",
        price: 40,
        stock: 60
    },
    {
        id: 5,
        name: "Butter",
        category: "Dairy",
        price: 55,
        stock: 70
    },
    {
        id: 6,
        name: "Soap",
        category: "Personal Care",
        price: 38,
        stock: 120
    },
    {
        id: 7,
        name: "Shampoo",
        category: "Personal Care",
        price: 180,
        stock: 45
    },
    {
        id: 8,
        name: "Tea Powder",
        category: "Beverages",
        price: 210,
        stock: 35
    },
    {
        id: 9,
        name: "Coffee",
        category: "Beverages",
        price: 320,
        stock: 40
    },
    {
        id: 10,
        name: "Biscuits",
        category: "Snacks",
        price: 30,
        stock: 90
    }
];


router.get("/", (req, res) => {
    res.json(products);
});


router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});


router.post("/", (req, res) => {

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});


router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name || product.name;
    product.category = req.body.category || product.category;
    product.price = req.body.price || product.price;
    product.stock = req.body.stock || product.stock;

    res.json({
        message: "Product updated successfully",
        product
    });
});


router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted successfully",
        deletedProduct
    });
});

module.exports = router;