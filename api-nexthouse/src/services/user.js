const { Users } = require('../database/models');

module.exports = {
  login: async (email, password) =>
    await Users.findOne({
      where: {
        email,
        password,
      },
    }),
};
