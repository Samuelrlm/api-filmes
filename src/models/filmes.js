const connection = require("./connection")

async function insertFilme(filme){
    const filmeInsert = await connection.query(`
        INSERT INTO filmes (titulo, genero, ano, minutos, nota, sinopse, banner)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `, [filme.titulo, filme.genero, filme.ano, filme.minutos, filme.nota, filme.sinopse, filme.banner])

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

    return filme.rows[0]
}

async function deleteFilme(id){
    const filme = await connection.query(`
        DELETE FROM filmes
        WHERE id = $1
    `, [id])

    return filme.rows[0]
}

module.exports = {
    insertFilme,
    getFilmes,
    getFilmeById,
    deleteFilme
}
