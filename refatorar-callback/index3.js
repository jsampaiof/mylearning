import fs from 'fs';
import { promisify } from 'util';

let alunos;

const readFilepromise = promisify(fs.readFile)

// fs.readFile('./alunos.json', (erro, dados) => {
//    if (erro){
//        console.error(erro);
//        return;
//    }
//    alunos = JSON.parse(dados);
//    console.log("alunos:", alunos)
// })

readFilepromise('./alunos.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log("alunos:", alunos)
}).catch((error) => {
    console.error(error);
})