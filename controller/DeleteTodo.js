const model = require('../models/Tool');

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await model.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found',
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: 'Todo Deleted Successfully!',
    });
  } catch (error) {
    console.log('Error while deleting todo', error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = deleteTodo;