import fetch from 'node-fetch';

const apiUrl = 'https://swapi.dev/api';

export async function getPeople(page) {
    const response = await fetch(`${apiUrl}/people/`);
    const people = await response.json();
    
    return people.results;
}

