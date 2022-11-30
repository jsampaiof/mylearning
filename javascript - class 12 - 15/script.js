const countries = [
    SouthAmerica = {
        pais: 'Brazil, Argentina, Paraguay, Chile, Colombia, Venezuela,'
    },
    NorthAmerica = {
        pais2: 'UniteStates, Canada, Mexico'
    },
    Asia = {
        pais3: 'China, South Korea, Thailand, Malaysia'
    }
]

function paisesdosul(South){
    return South.SouthAmerica;
}

let paises = countries.map(paisesdosul);

console.log(countries);

/*let hotcoffee = 'oh shit! Here we go again'
console.log(hotcoffee);

const girls = []

const boys =['Lulamolusco', 'Birolilo', 'Cirolouco', 'Dacioloursal'] //não leve a serio é só zueira. Pode checar com o Alckmin, ele tá comendo a merenda.

girls.push('Trinity', 'Savannah', 'Fiorella')

girls.unshift('brenda')

girls.splice(2)

console.log(girls)

const concatenameucoracaocomoteubb = girls.concat(boys) ;

console.log(concatenameucoracaocomoteubb);

let turmadamonica = Array.from('magali');

console.log(turmadamonica);

function textstyle(){
    const menu = document.querySelector('#Uppercaseandlowercase');
    const valor = menu.options[menu.selectedIndex].value;
    const title = document.querySelector('#title');
    title.style.textTransform = valor;
}*/