const express = require("express");
const router = express.Router();

// import controllers
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo} = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");


// define routes
router.post('/create-todo', createTodo);
router.get('/get-todo', getTodo);
router.get('/get-todo/:id', getTodoById);
router.put('/update-todo/:id', updateTodo);
router.delete('/delete-todo/:id', deleteTodo); 


module.exports = router;
