import fs from 'fs';

let content;

function readFile(callback){
    fs.readFile('./CRONOGRAMA.json', 'utf8', (erro, data) => {
        if(erro){
            console.error(erro);
            return;
        } else{
            //content = JSON.parse(data);
            //console.log(content);
            callback();
            console.log(data);
        };
    });

    setTimeout(function(){
        fs.readFile('./CRONOGRAMA.json', (erro, data) => {        
            if(erro){
                console.log(erro);            
            }else{
                console.log(JSON.parse(data));
                console.log(data);            
            };
        })
    }, 2000);
};

function writeFile(){
    const newData = {'19':'concluido'};
    fs.writeFile('./CRONOGRAMA.json', JSON.stringify(newData), (erro) => {
        if(erro){
            console.log('deu ruim');            
        };
    });
};

//readFile();
readFile(writeFile);