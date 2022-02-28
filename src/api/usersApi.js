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
      return res.status(200).json({
        total: users.length,
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
        avatar: "https://goservicegr17.herokuapp.com" + "/images/users/" + dbUsers.avatar,
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
