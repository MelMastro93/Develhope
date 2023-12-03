// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori.
// Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.


function performOperation(a, b, callback) {
    let result = a + b
    if (a <= 11 && b <= 11) {
        callback(result)
    } else {
        callback(new Error("Errore, impossibile calcolare!", null))
    };

}

performOperation(50, 7, (error, data) => {

    if (error) {
        console.log(error);

    } else {
        console.log(data);
    }
})


// function displayResult(result) {
//     console.log("il risultato è ", result)
// }

// performOperation(6, 3, displayResult);


