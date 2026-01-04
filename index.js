const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse JSON request bodies
app.use(express.json());

// import routes for Todo APIs
const todoRoutes = require('./routes/todo');

// mount the todo API routes
app.use("/api/v1", todoRoutes);

// connect to the database
const dbConnect = require('./config/database');
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send("Welcome to Todo App");
});

// start server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
