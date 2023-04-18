const publicRoutes = require('./publicRoutes');
const userRoutes = require('./userRoutes');
const conversationRoutes = require('./conversationRoutes');
const jwt = require('jsonwebtoken');

module.exports = (app, express) => {
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    app.get('/', (req, res) => res.send('Welcome to API-AudioNotes'));
    
    app.use(publicRoutes);

    // ONLY AUTHENTICATE ACCESS
    app.use((req, res, next) => {
        let token = req.headers.authorization;
        if (!token) return res.sendStatus(401);
        token = token.replace('Bearer ', '');
    
        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if(err) return res.sendStatus(401);
            req.userId = payload.userId;
            next();
        })
    })

    app.use(userRoutes);
    app.use(conversationRoutes);
}