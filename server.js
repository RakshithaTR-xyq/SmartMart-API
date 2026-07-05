const express = require("express");
const app = express();

app.use(express.json());

// Import Routes
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customers");
const employeeRoutes = require("./routes/employees");
const orderRoutes = require("./routes/orders");
const supplierRoutes = require("./routes/suppliers");

// Use Routes
app.use("/products", productRoutes);
app.use("/customers", customerRoutes);
app.use("/employees", employeeRoutes);
app.use("/orders", orderRoutes);
app.use("/suppliers", supplierRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express D-Mart API");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});