// import from models
const Todo = require('../models/todo');

// define route handler
exports.createTodo = async (req, res) => {
    try {
        // extract title and description
        const { title, description } = req.body;

        // create todo
        const response = await Todo.create({ title, description });

        // send JSON response
        res.status(201).json({
            success: true,
            data: response,
            message: 'Entry created successfully',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
