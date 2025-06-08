import swaggerJSDoc from "swagger-jsdoc";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Product',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / Typescript',
            version: '1.0.0',
            description: 'API Docs for Products'
        }
    },
    apis: ['./src/routers.ts']
}

const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec