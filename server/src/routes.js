const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const IndexController = require('./controllers/IndexController');
const isAuthenticated = require('./policies/isAuthenticated');

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register);

    app.post('/login',
        AuthenticationController.login);

    app.get('/vests', IndexController.index)
};