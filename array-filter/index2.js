import {getPeople} from './index.js';

async function main(){
    const starPeople = await getPeople();
    const starPeopleFilter = starPeople.filter(person => {return person.height <= 100})
    .map(person => {
        return{name: person.name, height: person.height};
    });
    console.log(starPeopleFilter);
}
main();