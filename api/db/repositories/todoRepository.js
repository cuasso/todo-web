import TodoModel from '../models/todoModel'
import UsersRepository from './usersRepository'

class TodoRepository {
    static getTodos(activeToken,callback) {
        UsersRepository.get({ activeToken: activeToken }, (user) => {
            TodoModel.find({ idUser: user.id },(todos) => {
                callback(todos)
            })
        })
    }
}