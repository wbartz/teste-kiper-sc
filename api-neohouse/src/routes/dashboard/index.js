const express = require('express');
const router = express.Router();
const service = require('../../services/dashboard');
const utils = require('../../utils');

/**
 * @route GET /api/v1/dashboard
 * @group dashboard - Dashboard do sistema
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {Array.<Blocks>} blocks - Lista de blocos
 */
router.get('/', async (_, res) => {
  try {
    const dashboard = await service.getDashboard();

    return res.status(200).json({
      type: 'success',
      dashboard,
    });
  } catch (error) {
    utils.alert(`list-dashboard: ${error}`);
    return res.status(200).json({
      type: 'error',
      code: 'list-dashboard-error',
    });
  }
});

module.exports = router;
