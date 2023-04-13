'use strict';

import {financiamento} from './financiamento.js';
import {financiamentocarencia} from './financiamentocarencia.js';

const comcarencia = document.querySelector('#carencia');
const listasuspensa = document.querySelector('#listasuspensa');
const corpoTabela = document.querySelector('#corpoTabela');
const textovalor = document.querySelector('#textoValor');
const textoentrada = document.querySelector('#textoEntrada');
const textotaxa = document.querySelector('#textoTaxa');
const textoprazo = document.querySelector('#textoPrazo');
const botaocalcular = document.querySelector('#botaoCalcular');

comcarencia.addEventListener('change', function(){
    if(this.checked){
        listasuspensa.removeAttribute('hidden');
    }
    else{
        listasuspensa.setAttribute('hidden', 'hidden');
    }
});

function limparCorpo(){
    while(corpoTabela.firstChild){
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

botaocalcular.addEventListener('click', function(){
    limparCorpo();
    const valor = parseFloat(textovalor.value);
    const entrada = parseFloat(textoentrada.value);
    const taxa = parseFloat(textotaxa.value);
    const prazo = parseFloat(textoprazo.value);
    let simulação;
    if (comcarencia.checked) {
        const carencia = parseInt(listasuspensa.value);
        simulação = new financiamentocarencia(valor, entrada, taxa, prazo, carencia)
    } else{
        simulação = new financiamento(valor, entrada, taxa, prazo)
        console.log(simulação.getParcelas());
    }
    simulação.calcParcelasMensais();
    simulação.ExibirParcelas();
})