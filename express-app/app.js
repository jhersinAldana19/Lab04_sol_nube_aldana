const express = require('express');
const app = express();
const port = 5000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('jhersin Aldana');
});

// Ruta /clientes
app.get('/clientes', (req, res) => {
    const clientes = [
        { id: 1, nombre: 'jose Gutierres' },
        { id: 2, nombre: 'Alphonso davies' },
        { id: 3, nombre: 'Roberto Carbajal' }
    ];
    res.json(clientes);
});

// Ruta /productos
app.get('/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: 'Teclado gamer' },
        { id: 2, nombre: 'Mouse' },
        { id: 3, nombre: 'Ropero' }
    ];
    res.json(productos);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
