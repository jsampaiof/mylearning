/*function changecolor() {
    const numero = document.querySelector("#numero").value;
    if (numero <= 10) {
        document.body.style.background = pink;
    } else {
        document.body.style.background = blue;
    }
}

let nota1 = 9
let nota2 = 2

function media(n1, n2){
    const resultado = (n1 + n2)  / 2;
    if (resultado < 5) {
        console.log('menor que 5')
    } else {
        console.log('maior que 5')
    }
}

console.log(media(nota1, nota2))

const lanches = ['pastel', 'coxinha', 'esfiha', 'quibe']

function lancheslist(){
    let lista = '';
    for (let i = 0; i < lanches.length; i++){
        lista += '<li>' + lanches[i] + '</li>';
    }
    console.log(lista)
    return lista
}

document.querySelector('#lanches-lista').innerHTML = lancheslist();

const lanches = ['pastel', 'coxinha', 'esfiha', 'quibe', 'enroladinho']

function lancheslist(){
    let lista = '';
    for (let lanche of lanches){
        lista += '<li>' + lanche + '</li>';
    }
    console.log(lista)
    return lista
}

document.querySelector('#lanches-lista').innerHTML = lancheslist();

const lanches = ['pastel', 'coxinha', 'esfiha', 'quibe', 'enroladinho']

let sex = 0
while(sex < lanches.length){
    console.log(lanches[sex]);
    sex++;
};*/

const lanches = ['pastel', 'coxinha', 'esfiha', 'quibe', 'enroladinho']

let sex = 0

do{
    alert('olá gostoso');
    sex++;    
}while(sex < lanches.length);