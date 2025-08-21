const Todo = require('../models/Tool');

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    // Return the updated document
    const response = await Todo.findByIdAndUpdate(
      id,
      { title, description, updatedAt: Date.now() },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: response,
      message: 'Todo updated successfully',
    });
  } catch (e) {
    console.error('error in updating data', e);
    res.status(500).json({
      success: false,
      message: 'Error in updating data',
    });
  }
};

module.exports = updateTodo;