const express = require('express');
const router = express.Router();
const service = require('../../services/blocks');
const utils = require('../../utils');

/**
 * @route GET /api/v1/blocks
 * @group blocks - Dashboard do sistema
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

module.exports = router;