//creare una funzione che ci restituisce un numero random
//se il numero random è maggiore di 5 allora stampa il risultato altrimento deve restituire errore

function number() {


        let numero = Math.floor(Math.random() * 10);
        return new Promise((resolve, reject) => {
            if (numero < 5) {
                resolve(numero)

            } else {
                reject("il tuo numero è minore di 5")
            }
        })



}

number().then((data) => console.log("Il tuo numero è :", data)).catch((error) => console.log("Errore:", error))