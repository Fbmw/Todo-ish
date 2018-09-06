const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        description:{type: String},
        done: {type: Boolean},
    },
    {
        timestamps:true
    }
);

//const Todo = mongoose.model('Todo', todoSchema);
/**exports todo model to use in Node */
module.exports = mongoose.model('todo', todoSchema)