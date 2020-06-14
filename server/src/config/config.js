const path = require('path')

module.exports = {
    port: process.env.DB_NAME || 8081,
    db: {
        databse: process.env.DB_NAME || 'web_app',
        user: process.env.DB_USER || 'web_app',
        password: process.env.DB_PASS || 'web_app',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../web_app.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
