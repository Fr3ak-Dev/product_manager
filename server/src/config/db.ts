import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"

dotenv.config()
const db = new Sequelize(process.env.DATABASE_URL, {
    models: [__dirname + '/../models/**/*'], // ruta a los modelos
    logging: false
})

export default db