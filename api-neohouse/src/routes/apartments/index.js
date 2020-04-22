const express = require('express');
const router = express.Router();
const service = require('../../services/apartments');
const utils = require('../../utils');

/**
 * @route GET /api/v1/apartments
 * @group apartments - Listagem de apartamentos
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Array.<Apartments>} apartments - Lista de apartamentos
 */
router.get('/', async (_, res) => {
  try {
    const apartaments = await service.getAll();

    return res.status(200).json({
      type: 'success',
      apartaments,
    });
  } catch (error) {
    utils.alert(`list-apartments: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'list-apartments-error',
    });
  }
});

/**
 * @route GET /api/v1/apartments/:id
 * @group apartments - Buscar um apartamento
 * @param {int} id.query.required - Id do apartamento
 * @returns {string} type - ex.: success - error - warning
 * @returns {string} code
 * @returns {Apartments.model} apartment - Apartamento
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(200).json({
        type: 'error',
        code: 'required-fields',
      });

    const apartment = await service.getById(id);

    if (!apartament)
      return res.status(200).json({
        type: 'error',
        code: 'apartment-not-found',
      });

    return res.status(200).json({
      type: 'success',
      apartment,
    });
  } catch (error) {
    utils.alert(`get-apartment-error: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'get-apartment-error',
    });
  }
});

/**
 * @route POST /api/v1/apartment
 * @group apartments - Adicionar apartamento
 * @param {int} number.query.required - Número do apartamento
 * @param {int} block_id.query.required - ID do block
 * @returns {string} type - ex.: success - error - warning
 * @returns {string} code
 * @returns {Apartments.model} apartment - Novo apartamento
 */
router.post('/', async (req, res) => {
  try {
    const { number, block_id } = req.body;
    if (!number || !block_id)
      return res.status(200).json({
        type: 'error',
        code: 'required-fields',
      });

    const apartment = await service.add(req.body);

    return res.status(201).json({
      type: 'success',
      apartment,
    });
  } catch (error) {
    utils.alert(`add-apartment: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'add-apartment-error',
    });
  }
});

/**
 * @route PUT /api/v1/apartment/:id
 * @group apartments - Editar apartamento
 * @param {int} id.query.required - ID do apartamento
 * @param {int} number.query - Número do apartamento
 * @param {int} block_id.query - ID do bloco
 * @returns {string} type - ex.: success - error - warning
 * @returns {string} code
 * @returns {Apartments.model} apartment - Novo apartamento
 */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(200).json({
        type: 'error',
        code: 'required-fields',
      });
    }

    const apartment = await service.getById(id);

    if (!apartment) {
      return res.status(200).json({
        type: 'error',
        code: 'apartment-not-found',
      });
    }

    await service.update(id, req.body);

    return res.status(201).json({
      type: 'success',
      apartament: {
        id,
        ...req.body,
      },
    });
  } catch (error) {
    utils.alert(`add-apartment: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'add-apartment-error',
    });
  }
});

/**
 * @route DELETE /api/v1/apartment/:id
 * @group apartments - Remover apartamento
 * @param {int} id.query.required - Id do apartamento
 * @returns {string} type - ex.: success - error - warning
 * @returns {string} code
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(200).json({
        type: 'error',
        code: 'required-fields',
      });

    const apartment = await service.getById(id);

    if (!apartment) {
      return res.status(200).json({
        type: 'error',
        code: 'apartment-not-found',
      });
    }

    await service.delete(id);

    return res.status(200).json({
      type: 'success',
      code: 'deleted',
    });
  } catch (error) {
    utils.alert(`delete-apartment: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'delete-apartment-error',
    });
  }
});

module.exports = router;
