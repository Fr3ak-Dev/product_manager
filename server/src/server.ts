import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'

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

server.use(express.json())  // leer datos de formularios

server.use('/api/products', router)

server.get('/api', (req, res) => {
    res.json({msg: 'Desde API'})
})

export default server