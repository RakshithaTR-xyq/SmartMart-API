const express = require("express");
const router = express.Router();

let employees = [
    {
        id: 1,
        name: "Ramesh Kumar",
        designation: "Store Manager",
        salary: 50000,
        department: "Management"
    },
    {
        id: 2,
        name: "Suresh Patil",
        designation: "Cashier",
        salary: 25000,
        department: "Billing"
    },
    {
        id: 3,
        name: "Anita Sharma",
        designation: "Sales Executive",
        salary: 28000,
        department: "Sales"
    },
    {
        id: 4,
        name: "Rahul Verma",
        designation: "Store Keeper",
        salary: 30000,
        department: "Inventory"
    },
    {
        id: 5,
        name: "Priya Nair",
        designation: "HR Executive",
        salary: 40000,
        department: "HR"
    },
    {
        id: 6,
        name: "Arun Singh",
        designation: "Security Guard",
        salary: 22000,
        department: "Security"
    },
    {
        id: 7,
        name: "Neha Joshi",
        designation: "Receptionist",
        salary: 24000,
        department: "Administration"
    },
    {
        id: 8,
        name: "Vijay Rao",
        designation: "Delivery Executive",
        salary: 26000,
        department: "Delivery"
    },
    {
        id: 9,
        name: "Kiran Patel",
        designation: "Accountant",
        salary: 45000,
        department: "Finance"
    },
    {
        id: 10,
        name: "Sneha Reddy",
        designation: "Sales Executive",
        salary: 29000,
        department: "Sales"
    }
];

router.get("/", (req, res) => {
    res.json(employees);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.json(employee);
});


router.post("/", (req, res) => {

    const newEmployee = {
        id: employees.length + 1,
        name: req.body.name,
        designation: req.body.designation,
        salary: req.body.salary,
        department: req.body.department
    };

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee added successfully",
        employee: newEmployee
    });
});

router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    employee.name = req.body.name || employee.name;
    employee.designation = req.body.designation || employee.designation;
    employee.salary = req.body.salary || employee.salary;
    employee.department = req.body.department || employee.department;

    res.json({
        message: "Employee updated successfully",
        employee
    });
});

router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    const deletedEmployee = employees.splice(index, 1);

    res.json({
        message: "Employee deleted successfully",
        deletedEmployee
    });
});

module.exports = router;