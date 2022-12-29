'use strict';

class persondata {
    name;
    age;
    birthday;
    constructor(name, age, birthday){
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
}

class cars{
    model;
    year;
    marca;
    constructor(model, year, marca){
        this.model = model;
        this.year = year;
        this.marca = marca;
    }
}

class games{
    name;
    year;
    static pramaiores = '+18';
    static livre = '+2';
    constructor(name, year, idade){
        this.name = name;
        this.year = year;
        this.idade = idade;
    }
}

class actors {
    firstName;
    static middleName = 'Sampaio';
    lastname;
    constructor(firstName, lastname){
        this.firstName = firstName;
        this.lastname = lastname;
    }

    fullname(fullname){
        fullname = (`${this.firstName} ${this.lastname}`)
        return fullname;
    }
}

let person = new persondata('carlos', 20, '12/05/2000');
let person1 = new persondata('andressa', 17, '12/05/2006');
let car = new cars();
let game1 = new games('GTA', 2005, games.pramaiores);
let actor1 = new actors('Caio', 'Castro');
let actor2 = new actors('paulo', 'barbalho');
let actor3 = new actors('mariana', 'Castro');
/*console.log(actor1.fullname());
console.log(actor2.fullname());
console.log(actor3.fullname());
console.log(actor1['lastname']);
console.log(actor1.firstName);

/*console.log(person);
/console.log(person1.age);
let newperson = person;
newperson.name = 'samara';
newperson.age = 304;
console.log(person);*/

class movies{
    firstname;
    lastname;
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    static nomecompleto(firstname, lastname){
        const complete = (`${firstname} ${lastname}`);
        return complete;
    }

    getultimonome(){
        return this.lastname;
        
    }

}
let movie = new movies('exterminador', 'do futuro');
//console.log(movies.nomecompleto(movie.getultimonome()))
//console.log(movies.nomecompleto('exterminador', 'do futuro'));

class automoveis{
    marca;
    sub;
    constructor(marca, sub){
        this.marca = marca;
        this.sub = sub;
    }
}

class chevrolet extends automoveis{
    #nome;
    #ano;
    constructor(tipo, sub, nome, ano){
        super(tipo, sub);
        this.#nome = nome;
        this.#ano = ano;
        this.getType(ano);
        //this.getName(nome);
    }
    getType(ano){
        if(typeof(ano) !== 'number'){
            console.log('Ano não é um numero!');
        }
        else{
            console.log('ano é um numero');
        }        
    }
    getName(){
        return this.#nome;
    }
    getAno(){
        return this.#ano;
    }

    setName(name){
        this.#nome = name;
    }

    setAno(ano){
        this.#ano = ano;
    }
    
}

const camaro = new chevrolet('chevrolet', 'não', 'camaro', 2019);
console.log(camaro);
camaro.setAno(2039);
//camaro.setName('brazuli');
console.log(camaro);
const text = `${camaro.marca} ${camaro.getName()}`;
console.log(text);
let person = new persondata('carlos', 20, '12/05/2000');
let person1 = new persondata('andressa', 17, '12/05/2006');
let car = new cars()

console.log(person.name);
console.log(person1.age);
