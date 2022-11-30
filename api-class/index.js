import Express from "express";
import {StatusCodes} from 'http-status-codes';

const app = Express();
const PORT = process.env.PORT || 80;
let users = [
    {id: 1, name: 'gabriel', age: 21},
    {id: 2, name: 'suzan', age: 23},
];

app.use(Express.json());

//o primeiro paramentro é a porta e o segundo é uma função de callback. quando começar escutar essa porta especifica, ele vai executar essa função.
app.listen(PORT, () => {
    console.log(`servidor rodando na porta http://localhost:${PORT}`)
})

//exemplo de rota
app.get('/', (request, response) => {
    return response.send('Hello World')
});

app.get('/users', (request, response) => {
    return response.send(users)
});

app.get('/users/:userid', (request, response) => {
    const userid = request.params.userid;
    const user = users.find(user => {
        return (user.id === Number(userid))
    })
    return response.send(user)
});

app.post('/users', (request, response) => {
    const newuser = request.body;
    users.push(newuser);
    return response.status(StatusCodes.CREATED).send(newuser);
});

app.put('/users/:userid', (request, response) => {
    const userid = request.params.userid;
    const useridupdated = request.body;

    users = users.map(user => {
        if(userid === user.id){
            return useridupdated;
        }
        else{
        return user;}
    });
    return response.send(useridupdated);
});

app.delete('/users/:userid', (request, response) => {
    const userid = request.params.userid;
    users = users.filter((user) => user.id !== Number(userid));
    return response.status(StatusCodes.NO_CONTENT).send();
});