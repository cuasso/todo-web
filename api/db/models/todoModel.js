import mongoose from '../db'

const Schema = mongoose.Schema

const todoSchema = new Schema({
    todos: [
        {
            name: {
                type: String,
                required: true
            },
            done: {
                type: Boolean,
                required: true
            }
        }
    ],
    idUser: {
        type: String,
        ref: 'user',
        required: true
    }
})

const TodoModel = mongoose.model('todo', todoSchema)

export default TodoModel