// a partire da un array di oggetti di persone ci ritornerà le persone che hanno più di 18 anni
// gestire gli errori se non sono validi es non è un array

let persons = [
    {
        nome: "Melissa",
        cognome: "Mastro",
        age: 30,
        email: "mela@gmail.com"

    },

    {
        nome: "Luca",
        cognome: "Carmboni",
        age: 40,
        email: "pera@gmail.com"

    },

    {
        nome: "Giovanni",
        cognome: "Mastrangelo",
        age: 17,
        email: "ciliegia@gmail.com"

    }

]

function fetchAdults(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {
                let adults = array.filter((item) => item.age >= 18);
                   
                 resolve(adults)

            } else { 
                reject(new Error("Errore"))
            }

        }, 2000)
    })
}
fetchAdults(persons).then((adults)=>{console.log(adults)}).catch((error)=>{console.log(error)})