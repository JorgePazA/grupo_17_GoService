const { gogerModel } = require("../model");


const gogersApi = {

products: async (req, res) => {
    try{
        let dbGogers = await gogerModel.getAll();
        let gogers = [];
        const host = req.header.host;
        dbGogers.map((item) => {
            let goger = {
                id: item.id,
                name: item.fullName,
                description: item.description,
                detail: "http://" + host + "/api/goger/" + item.id
            }
            gogers.push(goger);
        })
        return res.status(200).json({
            total: gogers.length,
            // categories: {
            //     aseo: ,
            // },
            gogers: gogers,
            status: 200    
        })
     } catch (error) {
        res.send('error');
    }
    

},

oneUser: async (req, res) => {
    try{
        let dbUsers = await userModel.getOne(req.params.id);
        const host = req.header.host;
        let usuario = {
                id: dbUsers.id,
                name: dbUsers.name,
                email: dbUsers.email,
                avatar: "http://" + host + "/images/users/" + dbUsers.avatar
            }
        return res.status(200).json({
            users: usuario,
            status: 200    
        })

     } catch (error) {
        res.send('error');
    }
}
}

module.exports = gogersApi;