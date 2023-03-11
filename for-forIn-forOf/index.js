import { ob1 } from "./index2.js";

// const livro = [
//     {
//         namebook: 'gente que convence',
//         pages: 236,
//         author: 'Eduardo Ferraz',
//         editora: 'Planeta estrategia',
//         edition: 5,
//         cap: 14
//     }
// ]

function getPeople(){
    for (let i=0; i<ob1.length; i++) {
        console.log(livro[i]);
    }

    // for (const prop in ob1[0]) {
    //     console.table(prop);
    // }

    // for (const prop of ob1) {
    //     console.log(prop.braian.country);        
    // }
};

// getPeople()

function mapfunction(){
    const newlist = ob1.map((person) => {
        const { yo, country } = person.paula;
        return { yo, country };
    });
    console.log(newlist);
}

// mapfunction();

function filterfunction(){
    const newlist = ob1.filter((person) => {
        if(person.paula.status){
            'married';
            console.log(person.paula.status);
        }
    });
    // console.log(newlist);
};

filterfunction();