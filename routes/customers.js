const express = require("express");
const router = express.Router();

let customers = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 25,
        gender: "Male",
        phone: "9876543210",
        city: "Bangalore"
    },
    {
        id: 2,
        name: "Priya Verma",
        age: 28,
        gender: "Female",
        phone: "9876543211",
        city: "Mysore"
    },
    {
        id: 3,
        name: "Amit Kumar",
        age: 31,
        gender: "Male",
        phone: "9876543212",
        city: "Hubli"
    },
    {
        id: 4,
        name: "Sneha Patil",
        age: 24,
        gender: "Female",
        phone: "9876543213",
        city: "Belgaum"
    },
    {
        id: 5,
        name: "Vikram Singh",
        age: 35,
        gender: "Male",
        phone: "9876543214",
        city: "Dharwad"
    },
    {
        id: 6,
        name: "Anjali Rao",
        age: 27,
        gender: "Female",
        phone: "9876543215",
        city: "Mangalore"
    },
    {
        id: 7,
        name: "Rohan Das",
        age: 29,
        gender: "Male",
        phone: "9876543216",
        city: "Udupi"
    },
    {
        id: 8,
        name: "Kavya Nair",
        age: 23,
        gender: "Female",
        phone: "9876543217",
        city: "Shimoga"
    },
    {
        id: 9,
        name: "Arjun Reddy",
        age: 30,
        gender: "Male",
        phone: "9876543218",
        city: "Bellary"
    },
    {
        id: 10,
        name: "Pooja Joshi",
        age: 26,
        gender: "Female",
        phone: "9876543219",
        city: "Tumkur"
    }
];


router.get("/", (req, res) => {
    res.json(customers);
});


router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const customer = customers.find(c => c.id === id);

    if (!customer) {
        return res.status(404).json({
            message: "Customer not found"
        });
    }

    res.json(customer);
});


router.post("/", (req, res) => {

    const newCustomer = {
        id: customers.length + 1,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        phone: req.body.phone,
        city: req.body.city
    };

    customers.push(newCustomer);

    res.status(201).json({
        message: "Customer added successfully",
        customer: newCustomer
    });
});


router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const customer = customers.find(c => c.id === id);

    if (!customer) {
        return res.status(404).json({
            message: "Customer not found"
        });
    }

    customer.name = req.body.name || customer.name;
    customer.age = req.body.age || customer.age;
    customer.gender = req.body.gender || customer.gender;
    customer.phone = req.body.phone || customer.phone;
    customer.city = req.body.city || customer.city;

    res.json({
        message: "Customer updated successfully",
        customer
    });
});


router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = customers.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Customer not found"
        });
    }

    const deletedCustomer = customers.splice(index, 1);

    res.json({
        message: "Customer deleted successfully",
        deletedCustomer
    });
});

module.exports = router;