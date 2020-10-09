// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-45264689001a72c7d2e9ea47b0a021a4535da03e.cqwtwqgxnall.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '_K3=kbPEqRZ4pIMn[5Eh],Pu1v|A.II9'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}