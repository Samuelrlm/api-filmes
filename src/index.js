const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5404;
const routesFilmes = require('./routes/filmes');

app.use(cors());
app.use(express.json());

app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/docs.html'));
});

app.use('/filmes', routesFilmes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log(`Documentação em http://localhost:${port}/docs`)
})