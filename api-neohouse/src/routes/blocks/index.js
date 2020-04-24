const express = require('express');
const router = express.Router();
const service = require('../../services/blocks');
const utils = require('../../utils');

/**
 * @route GET /api/v1/blocks
 * @group blocks - Listagem de blocos
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Array.<Blocks>} blocks - Lista de blocos
 */
router.get('/', async (_, res) => {
  try {
    const blocks = await service.getAll();

    return res.status(200).json({
      type: 'success',
      blocks,
    });
  } catch (error) {
    utils.alert(`list-blocks: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'list-blocks-error',
    });
  }
});

/**
 * @route GET /api/v1/blocks/:id
 * @group blocks - Buscar os apartamentos do bloco
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Array.<Apartments>} apartments - Lista de apartamentos
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const apartments = await service.getAllApartments(id);

    return res.status(200).json({
      type: 'success',
      apartments,
    });
  } catch (error) {
    utils.alert(`list-blocks: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'list-blocks-error',
    });
  }
});

module.exports = router;
