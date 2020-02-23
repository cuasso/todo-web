import TodoModel from '../models/todoModel'
import UsersRepository from './usersRepository'

class TodoRepository {
    static getTodos(userToken, callback) {
        UsersRepository.get({ activeToken: userToken }, user => {
            TodoModel.findOne({ idUser: user.id }, (err, todos) => {
                callback(err, todos)
            })
        })
    }

    static saveTodos(todos, callback) {
        UsersRepository.get({ activeToken: todos.userSession }, user => {
            TodoModel.update({ idUser: user.id }, { idUser: user.id, todos: todos.todos }, { upsert: true }, err => {
                callback(err)
            })
        })
    }
}

export default TodoRepository