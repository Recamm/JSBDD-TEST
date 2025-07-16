// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'camilo', // tu contraseña
  database: 'contacto'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

module.exports = db;
