import { getpok } from "./API.js";

async function main(){
    // const pokemon = await getpok(1);
    // const pokemap = pokemon.map((person) => {
    //     return person.name;
    // });
    // console.log(pokemap);

    for (const prop of getpok) {
        console.log(prop);
    }
}

main()