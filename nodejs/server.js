// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const contactRoutes = require('./module/contacto');

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '/public/html/index.html'));
});

// Rutas
app.use('/', contactRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
