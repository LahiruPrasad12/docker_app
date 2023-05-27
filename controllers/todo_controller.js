const Todo = require("../models/todo_model");

// Add todos
exports.addTodo = async (req, res) => {
    try {
        console.log(req.body);
        console.log("req.body");
        const savedTodo = await Todo.create(req.body);
        if (savedTodo) {
            res.status(201).send({ message: "success!", data: savedTodo });
        } else {
            res.status(400).send({ message: "failed!", data: savedTodo });
        }
    } catch (e) {
        console.log("Error in Todos", e);
        res.status(500).send({ message: "server error", data: e });
    }
};

// Get all todos
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        if (todos) {
            res.status(200).send({ message: "success!", data: todos });
        } else {
            res.status(400).send({ message: "failed!", data: todos });
        }
    } catch (e) {
        console.log("Error in Get All Articles", e);
        res.status(500).send({ message: "server error", data: e });
    }
};

//Get todo by id
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (todo) {
            res.status(200).send({ message: "success!", data: todo });
        } else {
            res.status(400).send({ message: "failed!", data: todo });
        }
    } catch (e) {
        console.log("Error in Get Article By Id", e);
        res.status(500).send({ message: "server error", data: e });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        let allTodos = await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            status: "success",
            data: {
                allTodos,
            },
        });
    } catch (e) {

    }
};

exports.deleteTodo = async (req, res) => {
    let allTodos = await Todo.findByIdAndDelete(req.params.id)
    res.status(201).json({
        status: "success",
        data: {
            allTodos,
        },
    });
};


