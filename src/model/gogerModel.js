const db = require('../database/models')

const gogerModel = {
    getAll: async () => {
        try {
            const result = await db.gogers.findAll()
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getOne: async (id) => {
        try {
            const result = await db.gogers.findByPk(id)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    create: async (gogerData) => {
        try {
            const result = await db.gogers.create(gogerData)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    update: async (gogerData, id) => {
        try {
            const result = await db.gogers
                .update(
                    {
                        fullName: gogerData.fullName,
                        description: gogerData.description,
                        price: gogerData.price,
                        image: gogerData.image,
                        experience: gogerData.experience,
                        categories_id: gogerData.categories_id
                    },
                    {
                        where: { id: id }
                    })
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    destroy: async (id) => {
        try {
            const result = await db.gogers
                .destroy(
                    {
                        where: { id: id }
                    })
                    console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
            // .destroy({ where: { id: userId }, force: true }) // force: true es para asegurar que se ejecute la acción     
    }
}

// gogerModel.create({
//     fullName: 'Prueba Gogers',
//     description: 'Esta es una prueba para crear un goger',
//     price: 30000,
//     image: 'eawlñkkdaslekñl',
//     experience: 3,
//     categories_id: 1
// })
// gogerModel.getAll()

module.exports = gogerModel