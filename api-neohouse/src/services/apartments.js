const { Apartments } = require('../database/models');

module.exports = {
  getAll: async () => await Apartments.findAll(),
  getByBlock: async (block_id) =>
    await Apartments.findAll({
      where: {
        block_id,
      },
    }),
  getById: async (id) => await Apartments.findOne({ where: { id } }),
  add: async (apartment) =>
    await Apartments.create({
      ...apartment,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  update: async (id, apartment) =>
    await Apartments.update(
      {
        ...apartment,
        updatedAt: new Date(),
      },
      {
        where: {
          id,
        },
      }
    ),
  delete: async (id) =>
    await Apartments.destroy({
      where: {
        id,
      },
    }),
};
