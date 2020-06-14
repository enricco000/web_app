const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const EntriesController = require('./controllers/EntriesController')
const EntriesControllerPolicy = require('./policies/EntriesControllerPolicy')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    
    app.post('/login',
        AuthenticationController.login)
    
    app.get('/user',
        AuthenticationController.user)

    app.get('/entries',
        EntriesController.index)

    app.post('/entries',
        EntriesControllerPolicy.post,
        EntriesController.post)

    app.get('/entries/:postId',
        EntriesController.show)
    
    app.put('/entries/:postId',
        EntriesController.put)
    
    app.get('/bookmarks',
        BookmarksController.index)
}
