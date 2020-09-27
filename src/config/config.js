// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-eeb1ec38a7fde9120b0d8f93dc224eeed2e82b7d.cqwtwqgxnall.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'aAuo=lymiu6v$Z8c6q=%~>tc=#c_qeI{'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}