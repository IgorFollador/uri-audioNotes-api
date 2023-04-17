const database = require('../models');
const service = require('../services/ConversationService');

class ConversationController {
    
    static async storageMessage(req, res) {
        try {
            const dataForm = req.body;
            if (!dataForm.conversation_id || dataForm.conversation_id == null) {
                
            }
        } catch (error) {
            return 
        }
    }

    static async verifyCategory(req, res) {
        try {
            const data = req.body;

            return res.status(200).send(service.createCategory(data.content));
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: error.message })
        }
    }
    

}

module.exports = ConversationController;