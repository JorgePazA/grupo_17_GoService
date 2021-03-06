const db = require('../database/models')

const userModel = {
    getAll: async () => {
        try {
            const result = await db.users.findAll()
            return result
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    // obtener un usuario mediante id
    getOne: async (id) => {
        try {
            const result = await db.users.findByPk(id)
            return result
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    //buscar un usuario por su email
    findUserByEmail: async (email) => {
        try {
            const result = await db.users.findOne({ where: { email: email } })
            return result
        } catch (error) {
            console.error(error)
        }
    },
    create: async (user) => {
        try {
            const result = await db.users.create({
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                avatar: user.avatar,
                rol: user.rol
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    },
    updateUser: async (user, id) => {
        try {
            const result = await db.users
                .update(
                    {
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        password: user.password,
                        avatar: user.avatar,
                        rol: 1
                    },
                    {
                        where: { id: id }
                    })
            return result
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    destroyUser: async (id) => {
        try {
            const result = await db.users
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

module.exports = userModel