const { Blocks } = require('../database/models');

module.exports = {
  getAll: async () => await Blocks.findAll(),
};
