import fs from 'fs';
import { promisify } from 'util';

const readFilepromise = promisify(fs.readFile)

function readFile1() {
  readFilepromise('file1.txt', 'utf8').then((data) => {
    const dados = JSON.parse(data);
    return  dados;
  }).catch((erro)=>{
    console.error(erro);
  });
}

function readFile2() {
  readFilepromise('file2.txt', 'utf8').then((data) => {
    const dados = JSON.parse(data);
    return  dados;
  }).catch((erro)=>{
    console.error(erro);
  });
}

function readFile3() {
  readFilepromise('file3.txt', 'utf8').then((data) => {
    const dados = JSON.parse(data);
    return  dados;
  }).catch((erro)=>{
    console.error(erro);
  });
}

async function show(){
  try{
    const [read1, read2, read3] = await Promise.all([readFile1(), readFile2(), readFile3()]);
    console.log(read1);
    console.log(read2);
    console.log(read3);
  }catch(erro){
    console.error(erro);
  }
}

show()

// readFile1((err, data1) => {
//   if (err) {
//     console.error('Error reading file1:', err);
//     return;
//   }
//   readFile2((err, data2) => {
//     if (err) {
//       console.error('Error reading file2:', err);
//       return;
//     }
//     readFile3((err, data3) => {
//       if (err) {
//         console.error('Error reading file3:', err);
//         return;
//       }
//       console.log('File 1:', data1);
//       console.log('File 2:', data2);
//       console.log('File 3:', data3);
//     });
//   });
// });
