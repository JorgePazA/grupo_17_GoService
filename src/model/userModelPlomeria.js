const fs = require('fs')
const path = require('path')

const userModelPlomeria = {
    getUsers: function () {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, './baseElectricidad.json'), { encoding: 'utf8', }));
    },
    ifExist: function (cedula) {
        const ifExist = this.getUsers().find((item) => item.cedula == cedula)
        if (ifExist) {
            return (true)
        } else {
            return false
        }
    },
    createUser: function (user) {
        const users = this.getUsers()
        if (this.ifExist(user.cedula)) {
            return 'Ya existe'
        }
        users.push(user)
        fs.writeFileSync(path.resolve(__dirname, './baseElectricidad.json'), JSON.stringify(users, null, 4), { encoding: 'utf8' });
        return 'Creado'
    },
    deleteUser: function (cedula) {
        const newDb = this.getUsers().filter((item) => item.cedula != cedula);
        fs.writeFileSync(path.resolve(__dirname, './baseElectricidad.json'), JSON.stringify(newDb, null, 4), { encoding: 'utf8' });
    },
    updateUser: function (cedula, user) {
        const indiceBuscado = this.getUsers().findIndex((user) => user.cedula == cedula)
        if (indiceBuscado < 0) {
            return 'No existe esta cedula en la base de datos'
        }
        let newDb = this.getUsers()
        newDb[indiceBuscado] = user
        fs.writeFileSync(path.resolve(__dirname, './baseElectricidad.json'), JSON.stringify(newDb, null, 4), { encoding: 'utf8' })
        return 'Actualizado con exito'
    },
}


// userModel.updateUser(54321)
// console.log(userModel.getUsers())
// userModel.ifExist('12345')
module.exports = userModelPlomeria;