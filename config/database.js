const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "mysql2_test"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connection Done");
});

module.exports = db;