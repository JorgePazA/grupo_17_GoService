const { userModel } = require("../model");

const usersApi = {
  list: async (req, res) => {
    try {
      let dbUsers = await userModel.getAll();
      let users = [];
      dbUsers.map((item) => {
        let fullName = item.name + " " + item.lastName
        let usuario = {
          id: item.id,
          name: fullName,
          email: item.email,
          detail: "https://goservicegr17.herokuapp.com" + "/api/users/" + item.id,
        };
        users.push(usuario);
      });

      // Trae al ultimo usuario creado

      let lastUserPos = dbUsers[dbUsers.length - 1];
            let fullNameLast = lastUserPos.name + " " + lastUserPos.lastName
            let lastUser = {
                id: lastUserPos.id,
                name: fullNameLast,
                email: lastUserPos.email,
                image: "https://goservicegr17.herokuapp.com" + "/userimg/" + lastUserPos.avatar
            };
      return res.status(200).json({
        total: users.length,
        latest: lastUser,
        users: users,
        status: 200,
      });
    } catch (error) {
      res.send("error");
    }
  },

  oneUser: async (req, res) => {
    try {
      let dbUsers = await userModel.getOne(req.params.id);
      let fullName = dbUsers.name + " " + dbUsers.lastName
      let usuario = {
        id: dbUsers.id,
        name: fullName,
        email: dbUsers.email,
        avatar: "https://goservicegr17.herokuapp.com" + "/userimg/" + dbUsers.avatar,
      };
      return res.status(200).json({
        users: usuario,
        status: 200,
      });
    } catch (error) {
      res.send("error");
    }
  },
};

module.exports = usersApi;
