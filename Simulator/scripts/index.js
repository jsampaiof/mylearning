'use strict';

const comcarencia = document.querySelector('#carencia');
const listasuspensa = document.querySelector('#listasuspensa');

comcarencia.addEventListener('change', function(){
    if(this.checked){
        listasuspensa.removeAttribute('hidden');
    }
    else{
        listasuspensa.setAttribute('hidden', 'hidden');
    }
});