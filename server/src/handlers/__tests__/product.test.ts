import request from 'supertest'
import server from '../../server'

describe('GET /api/products', () => {
    it('should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Test Product',
            price: 19.99,
            availability: true
        })

        expect(response.statusCode).toBe(201)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(200)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('error')
    })
})