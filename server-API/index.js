import express from "express";
// import { users } from "./users.js";
import { StatusCodes } from 'http-status-codes';

// const express = require('express');
// const users = require("./users.js");
// const StatusCodes = require('http-status-codes');
let users = [
    {id: 1, nome: 'paula', idade: 23},
    {id: 2, nome: 'fabio', idade: 40}
];

const app = express();
const PORT = 220;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    return res.send('<h1>testando express</h1>');
});

app.get('/users', (req, res) => {
    return res.send(users)
});

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = users.find((user) => {
        return user.id === Number(userId); 
    });
    return res.send(user);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    return res.status(StatusCodes.CREATED).send(newUser);
});

app.put('/users/:userId', (req, res) => {
    let userId = req.params.userId;
    let updatedUser = req.body;
    users = users.map(user => {
        if(user.id === Number(userId)){
            return updatedUser;
        }
        return user;
    });
    return res.send(users);
})

app.delete('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    users = users.map((user) => {
        Number(userId) !== user.id;
    });
    return res.status(StatusCodes.NO_CONTENT).send(users)
});