import fs from 'fs';

let content;

function readFile(callback){
    fs.readFile('./CRONOGRAMA.json', (erro, data) => {
        if(erro){
            console.error(erro);
            return;
        } else{
            content = JSON.parse(data);
            console.log(content);
            callback();
        };
    });
    // fs.readFile('./CRONOGRAMA.json', (erro, data) => {
    //     if(erro){
    //         console.log(erro);            
    //     }else{
    //         console.log(data);            
    //     };
    // })
};

function writeFile(){
    const newData = {'8':'concluido'};
    fs.appendFile('./CRONOGRAMA.json', JSON.stringify(newData), (erro) => {
        if(erro){
            console.log('deu ruim');            
        };
    });
};

//readFile();
readFile(writeFile);