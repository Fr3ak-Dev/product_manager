import express from 'express'
import router from './router'
import db from './config/db'
import colors from 'colors'

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.magenta.bold('Connected to the database successfully'))
    } catch (error) {
        console.error(error)
        console.log(colors.bgRed.bold('Failed to connect to the database'))
    }
}
connectDB()

const server = express()

server.use(express.json())
server.use('/api/products', router)

export default server