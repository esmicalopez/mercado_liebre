const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

/* Configuraciones */
app.use(express.static(path.join(__dirname, 'public')));

/* Rutas */

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'register.html')));


app.listen(PORT, () =>console.log(`Server corriendo en http://localhost:${PORT}`));