const Todo = require('../models/todo');

// DELETE TODO BY ID
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Todo deleted successfully',
            data: deletedTodo,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Failed to delete todo',
            error: err.message,
        });
    }
};
