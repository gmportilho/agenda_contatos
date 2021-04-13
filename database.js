const Pool = require('pg').Pool;

const pool = new Pool({
    user:'dcjtdydpbqoxfh',
    password:'636904e79ea5df0323fd2b8f194d8c64d934ce6c3e9a6906d5bb96b35ed33fd4',
    host:'ec2-52-1-115-6.compute-1.amazonaws.com',
    database:'d7tfol0iedvsv9',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

//const script = `
//    CREATE TABLE IF NOT EXISTS contatos
//    (
//        Id serial primary key,
//        nome varchar(60) not null,
//        telefone varchar(20) not null
//    )
//`;

//pool.query(script, function(error, result){
//    if(error)
//        throw error;
//
//    console.log('Tabela criada com sucesso.')
//})

module.exports = {
    
    aync create(nome, telefone){
        const sql = `INSERT INTO contatos (nome, telefone) VALUES ($1, $2)`;
        const result = await pool.query(sql, [nome, telefone]);
    }
}