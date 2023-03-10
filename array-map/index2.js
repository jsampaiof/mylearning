import {getPeople} from './index.js';

async function main(){
    const starPeople = await getPeople();
    // const  starPeopleName = starPeople.map((person) => { 
    //     const {name, height, gender} = person;
    //     return {name, height, gender};
    // });

    // const  starPeopleName = starPeople.filter((person) => {
    //     return person.name[0] === 'D' || 'R';
    // }).map((person) => {
    //     return {name: person.name, gender: person.gender}
    // });
    // console.log(starPeopleName);
    // console.log(typeof starPeopleName);

    const  starPeopleName = starPeople.reduce((total, person) => {
        total += Number(person.height);
        return total;
    }, 0);
    console.log(starPeopleName);
}
main();