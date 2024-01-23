import express from 'express'
import router from './routes/index'
import {config} from 'dotenv'
config()
import './configs/database'

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(router)

app.listen(PORT,() =>console.log(`Listening on port ${PORT}`))



