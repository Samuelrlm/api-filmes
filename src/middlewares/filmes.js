function validateInsertFilmes(req, res, next){
    const { titulo, ano, genero, minutos, nota, sinopse, banner } = req.body

    if(!titulo || !ano || !genero || !minutos || !nota || !sinopse || !banner){
        return res.status(400).send("Preencha todos os campos")
    }

    if(titulo.length > 150){
        return res.status(400).send("Título deve ter no máximo 150 caracteres")
    }

    if(genero.length > 50){
        return res.status(400).send("Gênero deve ter no máximo 50 caracteres")
    }

    if(typeof ano !== "number" || typeof minutos !== "number"){
        return res.status(400).send("Ano e minutos devem ser números")
    }

    next()
}

function validateGetFilmeById(req, res, next){
    const { id } = req.params

    if(!id){
        return res.status(400).send("ID não informado")
    }

    next()
}

module.exports = {
    validateInsertFilmes,
    validateGetFilmeById
}