import { Router } from "express"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Product ID
 *           example: 1
 *         name:
 *           type: string
 *           description: The Product Name
 *           example: Product One
 *         price:
 *           type: number
 *           description: The Product Price
 *           example: 100
 *         availability:
 *           type: boolean
 *           description: The Product Availability
 *           example: true
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get list of products
 *     tags:
 *       - Products
 *     description: Returns a list of products
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags:
 *       - Products
 *     description: Returns a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The Product ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       400:
 *         description: bad Request - Invalid ID
 * 
 */
router.get('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  getProductById)

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     description: Return a new record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Product One
 *               price:
 *                 type: number
 *                 example: 100
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request - Invalid Input data
 */
router.post('/',
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),
  body('price')
    .isNumeric().withMessage('El precio debe ser un número')
    .notEmpty().withMessage('El precio es obligatorio')
    .custom(value => value > 0).withMessage('El precio debe ser mayor que cero'),
  handleInputErrors,
  createProduct)

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product with user input
 *     tags:
 *       - Products
 *     description: Returns the updated product
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The Product ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Product Updated
 *               price:
 *                 type: number
 *                 example: 100
 *               availability:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad Request - Invalid ID or Invalid Input data
 *       404:
 *         description: Product not found
 */
router.put('/:id',
  param('id').isInt().withMessage('ID no válido'),
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),
  body('price')
    .isNumeric().withMessage('El precio debe ser un número')
    .notEmpty().withMessage('El precio es obligatorio')
    .custom(value => value > 0).withMessage('El precio debe ser mayor que cero'),
  body('availability')
    .isBoolean().withMessage('Valor para disponibilidad no válido'),
  handleInputErrors,
  updateProduct)

router.patch('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  updateAvailability)

router.delete('/:id',
  param('id').isInt().withMessage('ID no válido'),
  handleInputErrors,
  deleteProduct)

export default router