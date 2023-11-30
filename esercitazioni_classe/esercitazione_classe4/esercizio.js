// Implementa la funzione lanciaDadi che:

// Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."

// Per la generazione casuale dei numeri dei dadi servirà utilizzare i metodi Math.floor() e Math.random()

let lanciaDadi =() =>{

    return Math.floor(Math.random() * 6)+1;
}
// function result(dado1,dado2) {
//     console.log(`Dado1=${dado1}, Dado 2 = ${dado2}`)
// }
function lancio() {
    console.log("Lancio dei dadi in corso...");
    let dado1 = lanciaDadi();
    let dado2 = lanciaDadi();
    setTimeout(()=>{
    console.log(`dado1=${dado1} dado2=${dado2}`)
        // result(dado1,dado2)
    },2000)
}

lancio()


