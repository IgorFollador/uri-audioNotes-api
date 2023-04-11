
class AuthenticationController {

    static welcome(req, res) {
        res.status(200).send('Success');
    }

}

module.exports = AuthenticationController;