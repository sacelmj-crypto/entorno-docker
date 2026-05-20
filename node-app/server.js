const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API funcionando correctamente'
    });
});

app.listen(3000, () => {
    console.log('Servidor Node.js ejecutándose en puerto 3000');
});
