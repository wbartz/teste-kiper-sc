const express = require('express');
const router = express.Router();
const service = require('../../services/residents');
const utils = require('../../utils');

/**
 * @route GET /api/v1/residents/:apartment_id
 * @group residents - Listagem dos moradores por apartamento
 * @param {int} apartment_id.query.required - ID do apartamento
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Array.<Residents>} residents - Lista de moradores
 */
router.get('/apartment/:apartment_id', async (req, res) => {
  try {
    const { apartment_id } = req.params;

    const residents = await service.getByApartment(apartment_id);

    return res.status(200).json({
      type: 'success',
      residents,
    });
  } catch (error) {
    utils.alert(`list-residents: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'list-residents-error',
    });
  }
});

/**
 * @route GET /api/v1/residents/:resident_id
 * @group residents - Buscar um morador
 * @param {int} resident_id.query.required - ID do morador
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Array.<Residents>} residents - Lista de moradores
 */
router.get('/:resident_id', async (req, res) => {
  try {
    const { resident_id } = req.params;

    const residents = await service.getById(resident_id);

    return res.status(200).json({
      type: 'success',
      residents,
    });
  } catch (error) {
    utils.alert(`list-residents: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'list-residents-error',
    });
  }
});

/**
 * @route POST /api/v1/residents
 * @group residents - Listagem dos moradores
 * @param {string} full_name.query.required - Nome do morador
 * @param {string} phone.query.required - Telefone do morador
 * @param {string} cpf.query.required - CPF do morador
 * @param {string} email.query.required - E-mail do morador
 * @param {string} birthday.query.required - Data de nascimento do morador
 * @param {bool} accountable.query - Responsável pelo apartamento
 * @param {int} apartment_id.query.required - ID do apartamento
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Residents.model} residents - Novo morador
 */
router.post('/', async (req, res) => {
  try {
    const { full_name, phone, cpf, email, birthday, apartment_id, accountable } = req.body;

    if (!full_name || !phone || !cpf || !email || !birthday || !apartment_id) {
      return res.status(200).json({
        type: 'error',
        code: 'required-fields',
      });
    }

    const hasAccountable = await service.getAccountable(apartment_id);
    
    if (hasAccountable.length > 0 && accountable) {
      return res.status(200).json({
        type: 'error',
        code: 'accountable-error',
      });
    }

    const resident = await service.add(req.body);

    return res.status(201).json({
      type: 'success',
      resident,
    });
  } catch (error) {
    utils.alert(`add-residents: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'add-residents-error',
    });
  }
});

/**
 * @route PUT /api/v1/residents/:id
 * @group residents - Buscar um morador
 * @param {int} id.query.required - ID do morador
 * @param {string} full_name.query - Nome do morador
 * @param {string} phone.query - Telefone do morador
 * @param {string} cpf.query - CPF do morador
 * @param {string} email.query - E-mail do morador
 * @param {string} birthday.query - Data de nascimento do morador
 * @param {bool} accountable.query - Responsável pelo apartamento
 * @param {int} apartment_id.query - ID do apartamento
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Residents.model} residents - Morador alterado
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

    const resident = await service.getById(id);

    if (!resident) {
      return res.status(200).json({
        type: 'error',
        code: 'resident-not-found',
      });
    }

    const hasAccountable = await service.getAccountable(apartment_id);
    const { accountable } = req.body;

    if (hasAccountable.length > 0 && accountable) {
      return res.status(200).json({
        type: 'error',
        code: 'accountable-error',
      });
    }

    await service.update(id, req.body);

    return res.status(201).json({
      type: 'success',
      resident: {
        id,
        ...req.body,
      },
    });
  } catch (error) {
    utils.alert(`add-residents: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'edit-residents-error',
    });
  }
});

/**
 * @route DELETE /api/v1/residents/:id
 * @group residents - Listagem dos moradores
 * @param {int} id.query.required - ID do morador
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 */
router.get('/residents/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await service.delete(id);

    return res.status(200).json({
      type: 'success',
      code: 'deleted',
    });
  } catch (error) {
    utils.alert(`list-residents: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'delete-residents-error',
    });
  }
});

/**
 * @route POST /api/v1/residents/search
 * @group residents - Listagem dos moradores
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 */
router.post('/search', async (req, res) => {
  try {
    const { field, term} = req.body;

    if (!field || !term) {
      return res.status(200).json({
        type: 'error',
        code: 'required-fields',
      });
    }

    const residents = await service.search(field, term);

    return res.status(201).json({
      type: 'success',
      residents,
    });
  } catch (error) {
    utils.alert(`search-residents: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'search-residents-error',
    });
  }
});

module.exports = router;
