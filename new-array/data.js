let test = [
    {nome: 'suzan', idade: 35, cidade: 'feira'},
    {nome: 'paulo', idade: 35, cidade: 'SSA'},
    {nome: 'fabio', idade: 20, cidade: 'SSA'},
    {nome: 'sandro', idade: 15, cidade: 'petrolina'},
    {nome: 'cassio', idade: 15, cidade: 'petrolina'},
    {nome: 'josther', idade: 24, cidade: 'saj'},
    {nome: 'Jessica', idade: 26, cidade: 'petrolina'},
    {nome: 'carla', idade: 56, cidade: 'petrolina'},
];

let newperson = [];

function pushDados(){
    const promise1 = new Promise((resolve, reject)=>{
        //for (let i = 0; i < test.length; i++) {
            //newperson.push(test[i]);
            const filteredData = test.map((data) => {
                if (data.idade > 25){
                    newperson.push(data);
                }
                //newperson.push(user);
                //return newperson;
            });
            return filteredData;
        //};
        resolve();
    });
    return promise1;
};

// function pushDados(callback){
//     for (let i = 0; i < test.length; i++) {
//         newperson.push(test[i]);
//     };
//     callback()
// };

function showDados(){
    console.log(newperson);
};

//showDados();
//pushDados(showDados);

pushDados().then(showDados());