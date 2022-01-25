const db = require('../database/models');
const { Op } = require("sequelize");

// class Goger {
//     constructor ({fullName, description, price, image, experience}) {
//         this.fullName = fullName
//         this.description = description
//         this.price = price
//         this.image = image
//         this.experience = experience
//     }
// }


const gogerModel = {
    getAll: async () => {
        try {
            const result = await db.gogers.findAll({
                include: [{association: "category"}]
            })
            return(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getPlomeria: async () => {
        try {
            const result = await db.gogers.findAll({
                include : ['category'],
                where: { categories_id: 1}
                })
            return (result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getElectricidad: async () => {
        try {
            const result = await db.gogers.findAll({
                include : ['category'],
                where: { categories_id: 2}
                })
            return (result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getAseo: async () => {
        try {
            const result = await db.gogers.findAll({
                include : ['category'],
                where: { categories_id: 3}
                })
            return (result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getOne: async (id) => {
        try {
            const result = await db.gogers.findByPk(id, {
                include: [{association: "category"}]
            })
            return result
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    addProduct: async (gogerData, fileName) => {
        try {
            const result = await db.gogers.create(gogerData)
            return result
        } catch (error) {
            console.log(error)
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
                    return result
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
                    return result
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
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

// gogerModel.getAseo()