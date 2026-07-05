const express = require("express");
const router = express.Router();

let suppliers = [
    {
        id: 1,
        name: "ABC Traders",
        product: "Rice",
        phone: "9876543201",
        city: "Bangalore"
    },
    {
        id: 2,
        name: "Fresh Dairy Ltd",
        product: "Milk",
        phone: "9876543202",
        city: "Mysore"
    },
    {
        id: 3,
        name: "Sweet Sugar Co",
        product: "Sugar",
        phone: "9876543203",
        city: "Hubli"
    },
    {
        id: 4,
        name: "Golden Bakery",
        product: "Bread",
        phone: "9876543204",
        city: "Belgaum"
    },
    {
        id: 5,
        name: "Daily Foods",
        product: "Butter",
        phone: "9876543205",
        city: "Dharwad"
    },
    {
        id: 6,
        name: "Clean Care Pvt Ltd",
        product: "Soap",
        phone: "9876543206",
        city: "Mangalore"
    },
    {
        id: 7,
        name: "Beauty Products Ltd",
        product: "Shampoo",
        phone: "9876543207",
        city: "Udupi"
    },
    {
        id: 8,
        name: "Tea World",
        product: "Tea Powder",
        phone: "9876543208",
        city: "Shimoga"
    },
    {
        id: 9,
        name: "Coffee House",
        product: "Coffee",
        phone: "9876543209",
        city: "Bellary"
    },
    {
        id: 10,
        name: "Snack Foods",
        product: "Biscuits",
        phone: "9876543210",
        city: "Tumkur"
    }
];

router.get("/", (req, res) => {
    res.json(suppliers);
});

router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const supplier = suppliers.find(s => s.id === id);

    if (!supplier) {
        return res.status(404).json({
            message: "Supplier not found"
        });
    }

    res.json(supplier);
});

router.post("/", (req, res) => {

    const newSupplier = {
        id: suppliers.length + 1,
        name: req.body.name,
        product: req.body.product,
        phone: req.body.phone,
        city: req.body.city
    };

    suppliers.push(newSupplier);

    res.status(201).json({
        message: "Supplier added successfully",
        supplier: newSupplier
    });
});

router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const supplier = suppliers.find(s => s.id === id);

    if (!supplier) {
        return res.status(404).json({
            message: "Supplier not found"
        });
    }

    supplier.name = req.body.name || supplier.name;
    supplier.product = req.body.product || supplier.product;
    supplier.phone = req.body.phone || supplier.phone;
    supplier.city = req.body.city || supplier.city;

    res.json({
        message: "Supplier updated successfully",
        supplier
    });
});

router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = suppliers.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Supplier not found"
        });
    }

    const deletedSupplier = suppliers.splice(index, 1);

    res.json({
        message: "Supplier deleted successfully",
        deletedSupplier
    });
});

module.exports = router;