import express from "express"
import router from "../routes/routes"
import cors from "cors"
import { port } from './config'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app