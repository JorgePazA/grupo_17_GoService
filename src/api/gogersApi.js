const { gogerModel } = require("../model");


const gogersApi = {

products: async (req, res) => {
    try{
        let dbGogers = await gogerModel.getAll();
        let gogers = [];

        dbGogers.map((item) => {
            let goger = {
                id: item.id,
                name: item.fullName,
                description: item.description,
                detail: "https://goservicegr17.herokuapp.com" + "/api/gogers/" + item.id
            }
            gogers.push(goger);
        })

        let lastGogerPos = dbGogers[dbGogers-length -1];
        let lastGoger = {
            id: lastGogerPos.id,
            name: lastGogerPos.fullName,
            description:lastGogerPos.description,
            image: "https://goservicegr17.herokuapp.com" + "/img/" + lastGogerPos.image,
            detail: "https://goservicegr17.herokuapp.com" + "/api/gogers/" + lastGogerPos.id
        };
        return res.status(200).json({
            total: gogers.length,
            // categories: {
            //     aseo: ,
            // },
            latest: lastGoger,
            gogers: gogers,
            status: 200    
        })
     } catch (error) {
        res.send('error');
    }
},

oneUser: async (req, res) => {
    try{
        let dbGogers = await gogerModel.getOne(req.params.id);
        let goger = {
                id: dbGogers.id,
                name: dbGogers.fullName,
                description: dbGogers.description,
                price: dbGogers.price,
                image: "https://goservicegr17.herokuapp.com" + "/img/" + "dbGogers.image",
                experience: dbGogers.experience
            }
        return res.status(200).json({
            goger: goger,
            status: 200    
        })

     } catch (error) {
        res.send('error');
    }
}
}

module.exports = gogersApi;