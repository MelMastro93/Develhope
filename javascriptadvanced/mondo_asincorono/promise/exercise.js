//Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando 
//Promises per una migliore gestione degli errori.
//La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

const obj = { name: "John", age: 30 };

function fetchDataFromAPI(age) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (age >= 18) {
                resolve("Entra");

            } else {
                reject("Sei minorenne non puoi entrare!");
            }

        }, 2000)
    })

}

const checkAge = fetchDataFromAPI(18).then((data)=>{
    console.log(data)

}).catch((error)=>{
    console.log(error)
})


