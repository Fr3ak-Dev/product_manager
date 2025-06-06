import express from 'express'
import router from './router'
import db from './config/db'

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('Connected to the database successfully')
    } catch (error) {
        console.error(error)
        console.log('Failed to connect to the database')
    }
}
connectDB()

const server = express()

server.use('/api/server', router)

export default server