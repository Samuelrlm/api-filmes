const connection = require("./connection")

async function insertFilme(filme){
    const filmeInsert = await connection.query(`
        INSERT INTO filmes (titulo, genero, ano, minutos)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `, [filme.titulo, filme.genero, filme.ano, filme.minutos])

    return filmeInsert.rows[0]
}

async function getFilmes(){
    const filmes = await connection.query(`
        SELECT * FROM filmes
    `)

    return filmes.rows
}

async function getFilmeById(id){
    const filme = await connection.query(`
        SELECT * FROM filmes
        WHERE id = $1
    `, [id])
}

module.exports = {
    insertFilme,
    getFilmes,
    getFilmeById
}
