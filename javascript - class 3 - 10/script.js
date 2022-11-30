function login(){
    const name = document.querySelector('#user').value;
    alert(`welcome, ${name}`);
    document.getElementById('formulario').style.display = 'none';
}

function changecolor(){
    const menu = document.querySelector('#colors');
    const color = menu.options[menu.selectedIndex].value;
    document.body.style.background = color;
}