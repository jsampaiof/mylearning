import {getPeople} from './index.js';

async function main(){
    const starPeople = await getPeople();
    const  starPeopleName = starPeople.map((person) => { 
        const {name, height, gender, color, planet} = person;
        return {name, height, gender, color, planet};
    });
    console.log(starPeopleName);
}
main();