const express = require("express");
const TodoController = require("../controllers/todo_controller");
const router = express.Router();

//This api-resource route for update and delete specific student
router.route("/")
    .get(TodoController.getAllTodos)
    .post(TodoController.addTodo)


router.route("/:id")
    .patch(TodoController.updateTodo)
    .delete(TodoController.deleteTodo)
    .get(TodoController.getTodoById);

module.exports = router;
