const express = require('express');
const router = express.Router();
const { createTodo } = require('../controller/CreateTodo')
const Gettodo = require('../controller/Gettodo')
const GetTodo = require('../controller/GetTodoid')

router.post('/todo', createTodo)
router.get('/Gettodo', Gettodo)
router.get('/Gettodoid/:id', GetTodo)
module.exports = router