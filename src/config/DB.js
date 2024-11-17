const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'actividad8',
    // multipleStatements: true
});

module.exports = pool.promise();