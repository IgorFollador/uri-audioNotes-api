const { Router } = require('express');
const AuthenticationController = require('../controllers/AuthenticationController');

const router = Router();

router.get('/authentication', AuthenticationController.welcome);

router.post('/authenticate', AuthenticationController.authenticate);

module.exports = router;