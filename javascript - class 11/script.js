/*const person = {
    name: 'Josther',
    lastname: 'Fontes',
    age: 22,
    gender: 'male',
    Adress: {
        Street: 'avenue Andrade',
        number: 574,
    },
    personalInformations: function(){
        const fullName = this.name + this.lastname;
        return fullName;
    }
}

alert(person.personalInformations());*/

function multplicate(){
    const metros = document.querySelector('#metros1').value;
    const km = document.querySelector('#resultado').textContent = metros / 1000;
    return km;
}


