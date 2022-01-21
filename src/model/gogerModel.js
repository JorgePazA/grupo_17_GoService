const db = require('../database/models')

const gogerModel = {
    getAll: async() => {
        try {
            const result = await db.gogers.findAll()
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getOne: async(id) => {
        try {
            const result = await db.gogers.findByPk(id)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    create: async(goger) => {
        try {
            const result = await db.gogers.create(goger)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    }
}