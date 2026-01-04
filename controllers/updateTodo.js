const Todo = require('../models/todo');

// UPDATE TODO BY ID
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description, updatedAt: Date.now() },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Todo updated successfully',
            data: updatedTodo,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Failed to update todo',
            error: err.message,
        });
    }
};
