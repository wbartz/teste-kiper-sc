const { Apartments, Residents } = require('../database/models');

module.exports = {
  getAll: async () => await Apartments.findAll(),
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
    await Residents.destroy({
      where: {
        apartment_id: id,
      },
    }).then(() =>
      Apartments.destroy({
        where: {
          id,
        },
      })
    ),
};
