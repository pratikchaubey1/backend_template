const Todo = require('../models/Tool')

exports.createTodo = async (req, res) => {
    try{
        const { title, description} = req.body;

        const response = await Todo.create({
            title,
            description
        });

        res.status(200).json({
            success: true ,
            data: response,
            message: 'Todo created successfully'
        });
    } catch(err){
        console.error('error creating todo :',err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
        
    }
}
 
