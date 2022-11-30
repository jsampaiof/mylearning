const caixadetexto = document.querySelector('#tarefas');
const botãoadicionar = document.querySelector('#adicionar');
const listatarefas = document.querySelector('#lista-de-tarefas');
const form = document.querySelector("#form");
const listasuspensa = document.querySelector('#listasuspensa');

botãoadicionar.addEventListener('click', function(){
    const textodatarefas = caixadetexto.value;
    caixadetexto.value = ''; //apos a pessoa adicionar o valor, isso ira limpar o campo
    listatarefas.appendChild(adicionartarefas(textodatarefas));
    exibirocultarlistasuspensa()
    caixadetexto.focus();
})

function pause(event){
    event.preventDefault();
}

form.addEventListener('click', pause);

function adicionartarefas(textodatarefas){
    const elementli = document.createElement('li');
    const elementspan = document.createElement('span');
    elementspan.setAttribute('id', 'tarefa');
    elementspan.textContent = textodatarefas;
    elementli.appendChild(elementspan);
    elementli.appendChild(removertarefa())
    elementspan.addEventListener('click', function(){
        if(this.id === 'tarefa'){
            if (this.parentNode.className === 'naorealizada') {
                this.parentNode.className = 'realizada';
            } else {
                this.parentNode.className = 'naorealizada';
            }
        }
    })
    return elementli;
}

function removertarefa(){
    const botãoremover = document.createElement('button');
    botãoremover.textContent = 'X';
    botãoremover.className = 'remover';
    botãoremover.addEventListener('click', function(){
        listatarefas.removeChild(this.parentNode);
        exibirocultarlistasuspensa();
    });

    return botãoremover;
}

function exibirocultarlistasuspensa(){
    const elementspan = document.querySelector('#tarefa')
    if (elementspan === null) {
        listasuspensa.setAttribute('hidden', 'hidden');
    } else {
        listasuspensa.removeAttribute('hidden');
    }
}

listasuspensa.addEventListener('change', function(){
    if(listasuspensa.selectedIndex === 1 || listasuspensa.selectedIndex === 2){
        const vetortarefas = document.querySelectorAll('#tarefa')
        // o for vai percorrer cada elemento do vetor e disparar o evento de click no mouse.
        for (const tarefa of vetortarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if(listasuspensa.selectedIndex === 3){
        const vetorbotões = document.querySelectorAll('.remover')
        for (const botão of vetorbotões) {
            botão.dispatchEvent(new Event('click'));
        }
    }
})