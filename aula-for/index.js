import fetch from 'node-fetch';

const apiUrl = 'https://swapi.dev/api';

async function getPeople() {
    const response = await fetch(`${apiUrl}/people`);
    const people = await response.json();
    
    return people.results;
}

export {getPeople};