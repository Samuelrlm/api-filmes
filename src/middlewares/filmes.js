function validateInsertFilmes(req, res, next){
    const { titulo, ano, genero, minutos } = req.body

    if(!titulo || !ano || !genero || !minutos){
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

module.exports = {
    validateInsertFilmes
}