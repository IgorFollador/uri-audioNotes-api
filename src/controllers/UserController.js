const database = require('../models');
const bcrypt = require('bcrypt');

class UserController {

    static async create(req, res) {
        try {
            const userForm = req.body;

            if (userForm == null) return res.status(422).json({ message: 'Data not found' });
            if (userForm.password == null) return res.status(422).json({ message: 'Password is required' });

            const selectUser = await database.User.findOne({where: { email: userForm.email }});
            if (selectUser) return res.status(409).json({ message: 'Email has been registered' });

            userForm.password = bcrypt.hashSync(userForm.password, 10);

            const user = await database.User.create(userForm);

            const userDTO = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }

            return res.status(201).json(userDTO);
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

}

module.exports = UserController;