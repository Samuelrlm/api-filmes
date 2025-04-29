const express = require('express');
const app = express();
const port = 5404;
const routesFilmes = require('./routes/filmes');

app.use(express.json());

app.use(routesFilmes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})