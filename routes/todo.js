const express = require('express');
const router = express.Router();
const { createTodo } = require('../controller/CreateTodo')
const Gettodo = require('../controller/Gettodo')
const GettodoId = require('../controller/GetTodoid')
const UpdateTodo = require('../controller/UpdateTodo')
const DeleteTodo = require('../controller/DeleteTodo')

router.post('/Todo', createTodo)
router.get('/GetTodo',Gettodo)
router.get('/GetTodo/:id',GettodoId)
router.put('/UpdateTodo/:id',UpdateTodo)
router.delete('/DeleteTodo/:id',DeleteTodo)

module.exports=router