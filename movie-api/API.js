import fetch from "node-fetch";

export async function getpok(key){
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const apiKey = '1';
    // const myKey = 'comedy';
    // const keySearch = '2003';
    const response = await fetch(`${apiUrl}${key}`);
    const result = await response.json();
    // console.log(result);
    return result;
}

// getpok()