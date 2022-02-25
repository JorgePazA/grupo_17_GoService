const { userModel } = require("../model");

const usersApi = {
  list: async (req, res) => {
    try {
      let dbUsers = await userModel.getAll();
      let users = [];
      const host = req.header.host;
      dbUsers.map((item) => {
        let usuario = {
          id: item.id,
          name: item.name,
          email: item.email,
          detail: "http://" + host + "/api/users/" + item.id,
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
      const host = req.header.host;
      let usuario = {
        id: dbUsers.id,
        name: dbUsers.name,
        email: dbUsers.email,
        avatar: "http://" + host + "/images/users/" + dbUsers.avatar,
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
