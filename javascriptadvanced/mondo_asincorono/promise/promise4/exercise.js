// -Crea una Promise che simula il recupero dei dati da un'API.
// A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore.
// -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5
// -La chiamata avrà successo con il messaggio Data retrieved successfully se il 
// valore random è inferiore a 0.5 altrimenti fallisce con il messaggio Error: Failed to fetch data

/* APPUNTO : precedentemente avevo generato il Math.random() moltiplicandolo * 0.5. In questo modo mi cadeva sempre nel resolve
considerando che il Math.random genera un numero tra 0 e 1 ho tolto il *0.5 e creando direttamente la condizione.
 */

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random()
            if (success <= 0.5) {
                resolve(`Data retrieved successfully: ${(success)}`)
            } else reject(new Error("Failed to fetch data"))
        },2000)

    })
}
fetchDataFromAPI()
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })