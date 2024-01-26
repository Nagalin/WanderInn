import express from 'express'
import http from 'http'
import router from './routes/index'
import './configs/database'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { option } from './configs/swagger'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
config()

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT ?? 3000
const specs = swaggerJsDoc(option)

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs))
app.use(bodyParser.json())
app.use(router)

server.listen(PORT,() => console.log(`Listening on port ${PORT}`))

export default server



