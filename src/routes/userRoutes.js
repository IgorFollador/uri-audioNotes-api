const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.put('/users', UserController.update);

module.exports = router;