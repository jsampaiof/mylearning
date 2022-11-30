function change(){
    let text = document.querySelector('#description');
    text.remove();
};


const element = document.querySelector('#div');
const newelement = document.createElement('h2');
newelement.textContent = 'coxinha';

element.appendChild(newelement)

const removefilho = element.querySelectorAll('h1');

for(filhos of removefilho){
    element.removeChild(filhos);
}

//element.className = 'migles'

element.setAttribute('class', 'migles gostosa');

element.removeAttribute('id');

const botão = document.querySelector('#restore');
const elementh2 = document.querySelector('h2')

botão.addEventListener('click', function(){
    elementh2.remove()
})

/*function botãoadd(){
    const element = document.querySelector('#div');
    const newelement = document.createElement('p');
    newelement.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, maiores excepturi. Ad odio perferendis, dicta aliquid sequi quas exercitationem rem repudiandae voluptate nisi provident sit vel amet delectus, quia animi!';
    element.appendChild(newelement);
}*/