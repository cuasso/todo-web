import express from "express"
import router from "../routes/routes"
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`) 
})

export default app