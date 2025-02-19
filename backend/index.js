import express from "express"
import helmet from "helmet"
import morgan from "morgan";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(helmet())
app.use(morgan("dev"))
app.use(cors())


app.listen(PORT, () => {
    console.log("Server is running on port",PORT)
    });
