import express from "express"
import loginController from "../controllers/loginController"

const router = express.Router()

router.post("/api/authenticate",loginController.authenticate)
router.get("/", (req,res) => {
    return res.send("todo-api is up!")
})

export default router