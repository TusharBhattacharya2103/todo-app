// import from models
const Todo = require('../models/todo');

// GET ALL TODOS
exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: 'Todos fetched successfully',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Failed to fetch todos',
        });
    }
};

// GET TODO BY ID
exports.getTodoById = async (req, res) => {
    try {
        // extract id from params
        const id = req.params.id;

        // find todo by id
        const todo = await Todo.findById(id);

        // if todo not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found for the given id',
            });
        }

        // if todo found
        res.status(200).json({
            success: true,
            data: todo,
            message: 'Todo fetched successfully for the given id',
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Failed to fetch todo',
        });
    }
};
