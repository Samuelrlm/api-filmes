const modelFilmes = require("../models/filmes")

async function getFilmes(req, res){
    try {
        const filmes = await modelFilmes.getFilmes()

        return res.status(200).send(filmes)
    } catch (error) {
        return res.status(400).send("Erro ao buscar filmes")
    }
}

async function getFilmeById(req, res) {
    const { id } = req.params

    try {
        const filme = await modelFilmes.getFilmeById(id)

        return res.status(200).send(filme)
    } catch (error) {
        return res.status(400).send("Erro ao buscar filme")
    }
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

async function updateFilme(req, res){
    const { id } = req.params
    const filme = req.body

    try {
        const filmeUpdate = await modelFilmes.updateFilme(id, filme)

        if(!filmeUpdate){
            return res.status(404).send("Filme não encontrado")
        }

        return res.status(200).send(filmeUpdate)
    } catch (error) {
        return res.status(400).send("Erro ao atualizar filme")
    }
}

async function deleteFilme(req, res){
    const { id } = req.params

    try {
        const filme = await modelFilmes.deleteFilme(id)

        if(!filme){
            return res.status(404).send("Filme não encontrado")
        }

        return res.status(200).send(filme)
    } catch (error) {
        return res.status(400).send("Erro ao deletar filme")
    }
}

module.exports = {
    getFilmes,
    insertFilmes,
    getFilmeById,
    updateFilme,
    deleteFilme
}