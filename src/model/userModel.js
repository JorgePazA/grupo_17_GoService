const db = require('../database/models')

const userModel = {
    getAll: async() => {
        try {
            const result = await db.users.findAll()
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    getOne: async(id) => {
        try {
            const result = await db.users.findByPk(id)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    create: async(userData, fileName) => {
        try {
            const result = await db.users.create(userData)
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    //Revisar como cambiar el then por async await
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
                where: {id: id}
            })
            console.log(result)
        } catch (error) {
            console.log(`Ocurrió un error ${error.message}`)
        }
    },
    //Revisar como cambiar el then por async await
    destroy: function (req,res) {
        let userId = req.params.id;
        users
        .destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    }
}

userModel.update({
    name: 'Fran',
    lastName: 'Paz',
    email: 'jorge@gmail.com',
    password: '1234',
    avatar: 'dsadasdasdaswwq',
    rol: 1
},
2


)

module.exports = userModel