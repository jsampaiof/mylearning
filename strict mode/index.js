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

let person = new persondata('carlos', 20, '12/05/2000');
let person1 = new persondata('andressa', 17, '12/05/2006');
let car = new cars()

console.log(person.name);
console.log(person1.age);