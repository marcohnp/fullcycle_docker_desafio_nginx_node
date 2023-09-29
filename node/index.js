const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql2')
const connection = mysql.createConnection(config)
const faker = require('faker');
const nomeAleatorio = faker.name.findName();

function getNomesFromDatabase(callback) {
    const sql = 'SELECT name FROM people';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Erro ao recuperar nomes:', error);
            callback([]);
        } else {
            const nomes = results.map(result => result.name);
            callback(nomes);
        }
    });
}

app.get('/', (req, res) => {
    const nomeAleatorio = faker.name.findName();

    const insertSql = `INSERT INTO people (name) VALUES ('${nomeAleatorio}')`;
    connection.query(insertSql, (error, result) => {
        if (error) {
            console.error('Erro ao inserir nome:', error);
        } else {
            console.log('Nome inserido na tabela:', nomeAleatorio);
        }
    });

    getNomesFromDatabase(nomes => {
        const html = '<h1>Full Cycle</h1><h2>Nomes em nossa tabela:</h2><ul>' +
            nomes.map(nome => `<li>${nome}</li>`).join('');
        res.send(html);
    });
});


app.listen(port, () => {
    console.log('Rodando na porta ' + port)
    console.log('Nome inserido na tabela: ' + nomeAleatorio)
})

