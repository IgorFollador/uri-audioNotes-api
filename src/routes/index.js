const authenticationRoutes = require('./authenticationRoutes');
const userRoutes = require('./userRoutes');

module.exports = (app, express) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    app.get('/', (req, res) => res.send('Welcome to API-AudioNotes'));
    
    app.use(authenticationRoutes);
    app.use(userRoutes);
}