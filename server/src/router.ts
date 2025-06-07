import { Router } from "express"
import { createProduct } from "./handlers/product"
import { body } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

router.get('/', (req, res) => {
  res.send('Get request')
})

router.post('/',
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),
  body('price')
    .isNumeric().withMessage('El precio debe ser un número')
    .notEmpty().withMessage('El precio es obligatorio')
    .custom(value => value > 0).withMessage('El precio debe ser mayor que cero'),
    handleInputErrors,
  createProduct)

export default router