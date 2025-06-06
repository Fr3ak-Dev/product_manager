import express from 'express'
import router from './router'

const server = express()

server.use('/api/server', router)

export default server