'use strict';

const comcarencia = document.querySelector('#carencia');
const listasuspensa = document.querySelector('#listasuspensa');
const corpoTabela = document.querySelector('#corpoTabela');

comcarencia.addEventListener('change', function(){
    if(this.checked){
        listasuspensa.removeAttribute('hidden');
    }
    else{
        listasuspensa.setAttribute('hidden', 'hidden');
    }
});