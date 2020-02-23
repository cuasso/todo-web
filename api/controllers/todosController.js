import TodoRepository from '../db/repositories/todoRepository'

class todosController {

    static get(req, res) {
        TodoRepository.getTodos(req.params.userToken, (err, todos) => {
            if (err) return res.status(504).json(err)
            return res.status(200).json(todos)
        })
    }

    static saveTodos(req, res) {
        TodoRepository.saveTodos(req.body, err => {
            if (err) {
                console.log(err)
                return res.status(504).json(err)
            }
            return res.status(200).json({ idUser: req.body.idUser, todos: req.body.todos })
        })
    }
}

export default todosController