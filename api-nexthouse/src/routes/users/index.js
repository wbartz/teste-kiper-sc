const express = require('express');
const router = express.Router();
const service = require('../../services/user');
const utils = require('../../utils');

/**
 * @route POST /api/v1/login
 * @group login - Login da aplicação
 * @param {string} email.query.required - E-mail do usuário
 * @param {string} password.query.required - Senha do usuário
 * @returns {string} type - ex.: Success - error - warning
 * @returns {string} code
 * @returns {string} token
 */
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(401).json({
        type: 'error',
        code: 'required-fields',
      });

    const hash = utils.hashPassword(password);
    const user = await service.login(username, hash);

    if (!user) {
      return res.status(401).json({
        type: 'error',
        code: 'user-not-found',
      });
    }

    const token = utils.createToken(user.id);
    delete user.password;

    return res.status(201).json({
      type: 'success',
      token,
      user,
    });
  } catch (error) {
    utils.alert(`authentication: ${error}`);
    return res.status(401).json({
      type: 'error',
      code: 'auth-error',
    });
  }
});

module.exports = router;
