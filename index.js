const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/:nombre', (req, res) => {
    req.params
    res.send(`Hola ${req.params.nombre}, bienvenido a mi API`);
})

app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
