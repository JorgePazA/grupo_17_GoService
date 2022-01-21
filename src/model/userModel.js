const db = require('../database/models')

const userModel = {
    getAll: async () => {
        try {
            const result = await db.users.findAll()
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getOne: async (id) => {
        try {
            const result = await db.users.findByPk(id)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    create: async (userData) => {
        try {
            const result = await db.users.create(userData)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    update: async (userData, id) => {
        try {
            const result = await db.users
                .update(
                    {
                        name: userData.name,
                        lastName: userData.lastName,
                        email: userData.email,
                        password: userData.password,
                        avatar: userData.avatar,
                        rol: userData.rol
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
            const result = await db.users
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

// userModel.create({
//     name: 'Prueba',
//     lastName: 'Users',
//     email: 'prueba@gmail.com',
//     password: '1234',
//     avatar: 'dsadasdasdaswwq',
//     rol: 1
// })
// userModel.getAll()

module.exports = userModel