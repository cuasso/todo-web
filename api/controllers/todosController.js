class todosController {
    static get(req,res) {
        //todo: deberia recuperarlos desde una bd
        const todos = [{name: "guardar cosas en  bd", done: false}, 
        {name: "obtener todos de la capa api", done: true},
        {name: "guardar y recuperar todos de la bd", done: false},]

        return res.status(200).json(todos)
    }

    static saveTodos(req,res) {
        //deberia guardarlos en una bd
        console.log(req.body)
        return res.status(200)
    }
}

export default todosController