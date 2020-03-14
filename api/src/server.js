import express from "express"
import router from "../routes/routes"
import cors from  "cors"

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(process.env.PORT || 9000)

export default app