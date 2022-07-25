import {getPeople} from './index.js';

async function main(){
    const starPeople = await getPeople();
    const starpeopleheight = starPeople.reduce((total, person) => {
        total += Number(person.height);
        return total;
    }, 0);
    console.log(starpeopleheight/starPeople.length);
}
main();