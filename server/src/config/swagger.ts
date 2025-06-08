import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
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
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://gitlab.com/uploads/-/system/project/avatar/19500743/kisspng-application-programming-interface-logo-image-compu-i-can-develop-back-end-rest-api-for-your-service-f-5b7c8fe20af486.3712986915348899540449.png');
            height: 150px;
            width: 150px;
        }
        .swagger-ui .topbar {
            background-color:#121c25;
            .favicon {
                content: url('https://gitlab.com/uploads/-/system/project/avatar/19500743/kisspng-application-programming-interface-logo-image-compu-i-can-develop-back-end-rest-api-for-your-service-f-5b7c8fe20af486.3712986915348899540449.png');
            }
        }
    `,
    customSiteTitle: 'Documentation REST API Node.js / Express / Typescript',
    customfavIcon: 'https://gitlab.com/uploads/-/system/project/avatar/19500743/kisspng-application-programming-interface-logo-image-compu-i-can-develop-back-end-rest-api-for-your-service-f-5b7c8fe20af486.3712986915348899540449.png'

}

export default swaggerSpec
export { swaggerUiOptions }