import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec, { swaggerUiOptions } from './config/swagger'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'

export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.magenta.bold('Connected to the database successfully'))
    } catch (error) {
        console.log(colors.bgRed.bold('Hubo un error al conectar a la base de datos'))
    }
}
connectDB()

const server = express()

// Permitir conexiones
const corsOptions : CorsOptions = {
    origin: function(origin, callback) {
        if (origin == `${process.env.FRONTEND_URL}`) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
server.use(cors(corsOptions))

server.use(express.json())  // leer datos de formularios

server.use(morgan('dev'))

server.use('/api/products', router)

// Docs API
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server