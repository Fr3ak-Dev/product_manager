import request from 'supertest'
import server, { connectDB } from "../server"
import db from '../config/db'

describe('GET /api', () => {
    it('should return a JSON response with a message', async () => {
        const res = await request(server).get('/api')
        expect(res.statusCode).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/)
        expect(res.body.msg).toBe('Desde API')

        expect(res.status).not.toBe(404)
        expect(res.status).not.toBe('desde api')
    })
})

// conecta a la base de datos simulando el comportamiento
jest.mock('../config/db')

describe('connectDB', () => {
    it('debe manejar errores al conectar a la base de datos', async () => {
        // fuerza a que db.authenticate lance un error
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('Hubo un error al conectar a la base de datos'))
        // espia a console.error para verificar que se muestre el mensaje de error
        const consoleSpy = jest.spyOn(console, 'log')

        // llama a connectDB
        await connectDB()

        // verifica que se haya llamado a console.error con el mensaje de error
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error al conectar a la base de datos')
        )
    })
})
