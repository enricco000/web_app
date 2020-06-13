const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const EntriesController = require('./controllers/EntriesController')
const EntriesControllerPolicy = require('./policies/EntriesControllerPolicy')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    
    app.post('/login',
        AuthenticationController.login)

    app.get('/entries',
        EntriesController.index)

    app.post('/entries',
        EntriesControllerPolicy.post,
        EntriesController.post)

    app.get('/entries/:postId',
        EntriesController.show)
    
    app.put('/entries/:postId',
        EntriesController.put)
}
