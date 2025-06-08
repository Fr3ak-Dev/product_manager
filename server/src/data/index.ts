import { exit } from "process"
import db from "../config/db"

const clearDB = async () => {
    try {
        await db.sync({ force: true }); // Elimina todas las tablas y sus datos
        console.log('Datos eliminados correctamente')
        exit(0); // Salir con un código de éxito
    } catch (error) {
        console.error('Error al eliminar datos:', error)
        exit(1) // Salir con un código de error
    }
}
/*
    Este bloque de código verifica si el argumento '--clear' fue pasado al ejecutar el script.
    `process` es un objeto global que proporciona información y control sobre el proceso Node.js actual.
    `argv` es una propiedad del objeto `process` que es un array que contiene los argumentos de la línea 
        de comandos pasados durante la ejecución del script.
    `process.argv[2]` accede al tercer elemento del array, que es el primer argumento proporcionado por 
        el usuario (ya que el primer y segundo elementos son el ejecutable de Node.js y el script que se 
        está ejecutando, respectivamente).
    Si el tercer elemento del array es igual a '--clear', se invoca la función `clearDB()`.
*/
if (process.argv[2] === '--clear') {
    clearDB()
}



