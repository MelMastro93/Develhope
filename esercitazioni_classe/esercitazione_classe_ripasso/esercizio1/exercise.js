//Abbiamo un array di oggetti con i nomi degli utenti
//vogliamo restituire con una funzione gli utenti maggiorenni
//con una seconda funzione vogliamo creare username creato 
//da combinazione di nome, cognome, separato da un punto e un loweCase

const persons = [
    {
        id: 1,
        firstName: 'Mario',
        lastName: 'Rossi',
        age: 25
    },
    {
        id: 2,
        firstName: 'Maria',
        lastName: 'Verdi',
        age: 32
    },
    {
        id: 3,
        firstName: 'Giovanni',
        lastName: 'Rossi',
        age: 17
    }
];

// QUESTA E LA FUNZIONE 
// function utentiMaggiorenni(array){
//     return array.filter(person=> person.age >=18)
// } 
//QUESTA é FUNZIONE ANONIMA
let utentiMaggiorenni = (array) => {

    return array.filter(person => person.age > 17)
}
console.log(utentiMaggiorenni(persons))

function addUsername(array) {
    return array.map(person => {
        const userName = `${persons.firstName}.${persons.lastName}`;
        return {...person, userName: userName.toLowerCase()}
    })
}

addUsername(persons)