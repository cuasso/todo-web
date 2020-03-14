import TodoModel from '../models/todoModel'
import UsersRepository from './usersRepository'
import ExpiredSessionError from '../../src/errors/ExpiredSessionError'

class TodoRepository {
    static getTodos(userToken, callback) {
        UsersRepository.get({ activeToken: userToken }, user => {
            if (user == null){
                callback(new ExpiredSessionError(`session ${userToken} is expired`))
                return 
            }
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