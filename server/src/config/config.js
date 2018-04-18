module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: 'signal',
        user: 'nick',
        password: '1234',
        options: {
            dialect: 'mysql',
            host: 'localhost'
        }
    },
    authentication: {
        jwtSecret: 'secret'
    }
};