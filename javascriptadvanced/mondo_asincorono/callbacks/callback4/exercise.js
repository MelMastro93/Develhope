// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.

const callbackArray = [firstCallback, secondCallback, thirdCallback];

function runCallbacks(callbacks) {
   callbacks.forEach(callback => callback());
}
function firstCallback() {
   console.log(callbackArray)
}
function secondCallback() {
    console.log(callbackArray)
}

function thirdCallback() {
    console.log(callbackArray)
}

runCallbacks(callbackArray);