const { Router } = require('express');
const ConversationController = require('../controllers/ConversationController');

const router = Router();

router.post('/messages', ConversationController.storageMessage);

router.post('/verifyCategory', ConversationController.verifyCategory);

module.exports = router;