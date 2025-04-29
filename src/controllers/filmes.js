const modelFilmes = require("../models/filmes")

function getFilmes(req, res){
    res.send("Rota de filmes")
}

async function insertFilmes(req, res){
    const filme = req.body

    try {
        const filmeInsert = await modelFilmes.insertFilme(filme)

        return res.status(201).send(filmeInsert)       
    } catch (error) {
        return res.status(400).send("Erro ao inserir filme")
    }
}

module.exports = {
    getFilmes,
    insertFilmes
}