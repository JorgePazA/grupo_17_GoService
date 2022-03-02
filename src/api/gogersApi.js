const { gogerModel } = require("../model");


const gogersApi = {

    products: async (req, res) => {
        try {
            let dbGogers = await gogerModel.getAll();
            let gogers = [];

            dbGogers.map((item) => {
                let goger = {
                    id: item.id,
                    name: item.fullName,
                    description: item.description,
                    category: item.category.name,
                    detail: "https://goservicegr17.herokuapp.com" + "/api/gogers/" + item.id,
                    image: "https://goservicegr17.herokuapp.com" + "/img/" + item.image,
                }
                gogers.push(goger);
            })

            let lastGogerPos = dbGogers[dbGogers.length - 1];
            let lastGoger = {
                idLast: lastGogerPos.id,
                nameLast: lastGogerPos.fullName,
                descriptionLast: lastGogerPos.description,
                experienceLast: lastGogerPos.experience,
                imageLast: "https://goservicegr17.herokuapp.com" + "/img/" + lastGogerPos.image,
                detailLast: "https://goservicegr17.herokuapp.com" + "/api/gogers/" + lastGogerPos.id
            };

            let gogerCategoryPlomeria = await gogerModel.getGoger(1);
        let categoryPlomeria = [];

        gogerCategoryPlomeria.map((item) => {
            let plomeria = {
                id: item.id,
            }
            categoryPlomeria.push(plomeria)
        });

        let gogerCategoryElectricidad = await gogerModel.getGoger(2);
        let categoryElectricidad = [];

        gogerCategoryElectricidad.map((item) => {
            let electricidad = {
                id: item.id,
            }
            categoryElectricidad.push(electricidad)
        });

        let gogerCategoryAseo = await gogerModel.getGoger(3);
        let categoryAseo = [];

        gogerCategoryAseo.map((item) => {
            let aseo = {
                id: item.id,
            }
            categoryAseo.push(aseo)
        })

            return res.status(200).json({
                total: gogers.length,
                totalCategories: {
                    plomeria: categoryPlomeria.length,
                    electricidad: categoryElectricidad.length,
                    aseo: categoryAseo.length,
                },
                latest: lastGoger,
                gogers: gogers,
                status: 200
            })
        } catch (error) {
            res.send('error');
        }
    },

    oneUser: async (req, res) => {
        try {
            let dbGogers = await gogerModel.getOne(req.params.id);
            let goger = {
                id: dbGogers.id,
                name: dbGogers.fullName,
                description: dbGogers.description,
                category: dbGogers.category.name,
                price: dbGogers.price,
                image: "https://goservicegr17.herokuapp.com" + "/img/" + dbGogers.image,
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