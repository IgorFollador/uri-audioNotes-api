const authenticationRouter = require('./AuthenticationRouter');

module.exports = (app, express) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    app.get('/', (req, res) => res.send('Welcome to API-AudioNotes'));
    
    app.use(authenticationRouter);
}