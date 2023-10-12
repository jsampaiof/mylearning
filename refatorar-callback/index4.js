import fs from 'fs';
import { promisify } from 'util';

let alunos;
const readFilepromise = promisify(fs.readFile);

function readFile(){
    readFilepromise('./alunos.json').then((dados) => {
        alunos = JSON.parse(dados);
        console.log("before:", alunos);
        let alunosafter = alunos.filter((person) =>{
            return person.age == 25 || person.name[0] == 'A';
        }).map((person) => {
            return {id: person.id, name: person.name, age: person.age};
        });
        console.log("after:", alunosafter);
    }).catch((error) => {
        console.error(error);
    });
}

// function main(){
//     console.log(alunos);
// }

// readFile().then(() => {
//     main()
// }).catch((erro) => {
//     console.error(erro);
// })

readFile()