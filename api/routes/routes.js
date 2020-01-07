import express from "express"
import loginController from "../controllers/loginController"
import todosController from '../controllers/todosController'

const router = express.Router()

/** LOGIN CONTROLLER **/
router.post("/api/authenticate",loginController.authenticate)

/** TODOS CONTROLLER **/
router.get("/api/todos",todosController.get)
router.post("/api/todos",todosController.saveTodos)

/** DEFAULT URL **/
router.get("/", (req,res) => {
    return res.send("todo-api is up!")
})

export default router