import {getPeople} from './index.js';

async function main(){
    const starPeople = await getPeople();
    for(let i=0; i<starPeople.length; i++){
    console.log(starPeople[i].name);
    }
    //for(let propPerson in starPeople[0]){
    //    console.log(starPeople[0] [propPerson]);
    //}
    // for(let person of starPeople){
    //     console.log(person.name);
    // }
}
main();