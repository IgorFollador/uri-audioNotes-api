const { Router } = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');

const router = Router();

router.get('/authentication', AuthenticationController.welcome);

module.exports = router;