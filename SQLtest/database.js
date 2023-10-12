import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getAlunos(id){
    const [response] = await pool.query(
        `SELECT * 
        FROM aluno a 
        WHERE a.ra = ? `, [id]
    );
    return response[0];
}

const response = await getAlunos(1237);
console.log(response);