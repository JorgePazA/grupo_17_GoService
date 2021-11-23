// // const {userModelAseo, userModelElectricidad, userModelPlomeria} = require('../model/index.js')
// const path = require ('path')
// const fs = require('fs')

// const trabajadoresController = {
//     // getUsers: function () {
//     //     return JSON.parse(fs.readFileSync(path.resolve(__dirname, './baseAseo.json'), { encoding: 'utf8', }));
//     // },
//     saveTrabajadorAseo: (req,res) =>{
//         let trabajadoresAseo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/baseAseo.json')));
//         // if (this.ifExist(trabajadoresAseo.cedula)) {
//         //     return 'Ya existe'
//         // }
//         // let trabajadoresAseo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
//         // return JSON.parse(fs.readFileSync(path.resolve(__dirname, './baseAseo.json'), { encoding: 'utf8', }))
//         // res.send(trabajadoresAseo)
//         let ultimoAseo = trabajadoresAseo.pop()
//         res.send(ultimoAseo);
//         trabajadoresAseo.push(ultimoAseo);
//         // console.log();
//         let nuevoTrabajadorAseo = {
//             id: ultimoAseo.id +1,
//             fullName : req.body.name,
//             description: req.body.descripcion,
//             price: req.body.precio,
//             category: "aseo",
//             image: "aseadora1.webp",
//             experiencia: req.body.descuento,
//             cedula: req.body.cedula
//             // imagen: req.file.filename
//         }

//         trabajadoresAseo.push(nuevoTrabajadorAseo);
//         let nuevoTrabajadorAseoGuardar = JSON.stringify(trabajadoresAseo,null,4);
//         fs.writeFileSync(path.resolve(__dirname,'./baseAseo.json'), nuevoTrabajadorAseoGuardar);
//         res.redirect('/administrar');
//     },
// }

// module.exports = trabajadoresController