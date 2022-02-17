const fs = require("fs");
const path = require("path");
const { usersDB } = require("../data");

const newID = () => {
    let id = 0;
    usersDB.forEach((p) => (p.id > id ? (id = p.id) : ""));
    return id + 1;
  };
  
  const writeUsers = () => {
    let dbJSON = JSON.stringify(usersDB, null, 4);
    let dbPath = path.resolve(__dirname, "../data/usuarios.json");
    fs.writeFileSync(dbPath, dbJSON);
  };

const userModel = {
    fileName: path.resolve(__dirname, "../data/usuarios.json"),

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    generateId: function(){
        let allUsers = this.findAll()
        let lastUser = allUsers.pop()
        if (lastUser) {
            return lastUser.id + 1 
        }
        return 1
    },
    findAll: function () {
        return this.getData()
    },
    findByPk: function (id) {
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound;
    },
    findByField: function (field, text) {
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound;
    },
    create: function (userData, fileName) {
    let allUsers = this.findAll()
    let newUser = {
        id: this.generateId(),
        // ...userData
        nombre: userData.nombre,
        apellido: userData.apellido,
        email: userData.email,
        contrasena: userData.contrasena,
        avatar: userData.avatar,
        rol: 1
    }
    allUsers.push(newUser)
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
    return newUser           
    },
    delete: function (id) {
        let allUsers = this.findAll()
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '))
    }
}

module.exports = userModel;

// console.log(userModel.findByField('email', 'jorgepaz1993@gmail.com'))





// 1. Guardar al usuario en la DB
// 2. Buscar al usuario que se quiere loguear por su email
// 3. Buscar al usuario por su ID
// 4. Editar la información de un usuario
// 5. Eliminar a un usuario de la DB

