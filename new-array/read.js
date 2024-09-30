import { error, log } from 'console';
import fs from 'fs';
import { promisify } from 'util';

let content;
const readFilePromise = promisify(fs.readFile);
const writeFilePromise = promisify(fs.writeFile);

// function readFile(callback){
//     fs.readFile('./CRONOGRAMA.json', 'utf8', (erro, data) => {
//         if(erro){
//             console.error(erro);
//         } else{
//             //content = JSON.parse(data);
//             //console.log(content);
//             callback();
//             console.log(data);
//             fs.readFile('./CRONOGRAMA.json', (erro, data) => {        
//                 if(erro){
//                     console.log(erro);            
//                 }else{
//                     console.log(JSON.parse(data));
//                     //console.log(data);            
//                 };
//             })
//         };
//     });

    // setTimeout(function(){
    //     fs.readFile('./CRONOGRAMA.json', (erro, data) => {        
    //         if(erro){
    //             console.log(erro);            
    //         }else{
    //             console.log(JSON.parse(data));
    //             console.log(data);            
    //         };
    //     })
    // }, 2000);
//};

// function writeFile(){
//     const newData = {'25':'concluido'};
//     fs.writeFile('./CRONOGRAMA.json', JSON.stringify(newData), (erro) => {
//         if(erro){
//             console.log('deu ruim');            
//         };
//     });
// };

readFilePromise('./CRONOGRAMA.json', 'utf8').then((data) => {
    console.log(data);
    const newData = JSON.stringify({'152':'concluido'});
    writeFilePromise('./cronograma.json', newData, 'utf8').then((data) => {
        //console.log(data); WRITEFILE DON'T RETURN DATA
        readFilePromise('./CRONOGRAMA.json', 'utf8').then((data) => {
            console.log(data);
        }).catch((erro) => {
            console.error(erro);            
        });        
    }).catch((erro) => {
        console.error(erro);        
    });
}).catch((erro) => {
    console.error(erro);    
})

//readFile();
//readFile(writeFile);