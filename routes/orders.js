const express = require("express");
const router = express.Router();

let orders = [
    {
        id: 1,
        customerName: "Rahul Sharma",
        productName: "Rice",
        quantity: 2,
        totalAmount: 130,
        status: "Delivered"
    },
    {
        id: 2,
        customerName: "Priya Verma",
        productName: "Sugar",
        quantity: 3,
        totalAmount: 135,
        status: "Delivered"
    },
    {
        id: 3,
        customerName: "Amit Kumar",
        productName: "Milk",
        quantity: 5,
        totalAmount: 160,
        status: "Pending"
    },
    {
        id: 4,
        customerName: "Sneha Patil",
        productName: "Bread",
        quantity: 4,
        totalAmount: 160,
        status: "Delivered"
    },
    {
        id: 5,
        customerName: "Vikram Singh",
        productName: "Butter",
        quantity: 2,
        totalAmount: 110,
        status: "Processing"
    },
    {
        id: 6,
        customerName: "Anjali Rao",
        productName: "Soap",
        quantity: 6,
        totalAmount: 228,
        status: "Pending"
    },
    {
        id: 7,
        customerName: "Rohan Das",
        productName: "Shampoo",
        quantity: 1,
        totalAmount: 180,
        status: "Delivered"
    },
    {
        id: 8,
        customerName: "Kavya Nair",
        productName: "Tea Powder",
        quantity: 2,
        totalAmount: 420,
        status: "Processing"
    },
    {
        id: 9,
        customerName: "Arjun Reddy",
        productName: "Coffee",
        quantity: 1,
        totalAmount: 320,
        status: "Delivered"
    },
    {
        id: 10,
        customerName: "Pooja Joshi",
        productName: "Biscuits",
        quantity: 5,
        totalAmount: 150,
        status: "Pending"
    }
];

router.get("/", (req, res) => {
    res.json(orders);
});

router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const order = orders.find(o => o.id === id);

    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    res.json(order);
});

router.post("/", (req, res) => {

    const newOrder = {
        id: orders.length + 1,
        customerName: req.body.customerName,
        productName: req.body.productName,
        quantity: req.body.quantity,
        totalAmount: req.body.totalAmount,
        status: req.body.status
    };

    orders.push(newOrder);

    res.status(201).json({
        message: "Order added successfully",
        order: newOrder
    });
});

router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const order = orders.find(o => o.id === id);

    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    order.customerName = req.body.customerName || order.customerName;
    order.productName = req.body.productName || order.productName;
    order.quantity = req.body.quantity || order.quantity;
    order.totalAmount = req.body.totalAmount || order.totalAmount;
    order.status = req.body.status || order.status;

    res.json({
        message: "Order updated successfully",
        order
    });
});

router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = orders.findIndex(o => o.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    const deletedOrder = orders.splice(index, 1);

    res.json({
        message: "Order deleted successfully",
        deletedOrder
    });
});

module.exports = router;