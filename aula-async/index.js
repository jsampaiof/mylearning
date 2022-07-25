import fetch from 'node-fetch';

async function main(){
    const user = 'jsampaiof';
    const apiUrl = 'https://api.github.com';
    //fetch(`${apiUrl}/users/${user}`).then((response) => {
    //    return response.json();
    //}).then((user) => {
    //    console.log(user);
    //});
    const response = await fetch(`${apiUrl}/users/${user}`);
    const gituser = await response.json();
    console.log(gituser);
}