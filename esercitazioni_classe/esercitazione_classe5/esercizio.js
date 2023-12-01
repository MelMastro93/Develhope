// script che a partire da un array di oggetti in cui
// che hanno come coppie chiave : valore id, nome, prezzo e sconto
// ci calcoli il nuovo prezzo scontato e dobbiamo stampare i nostri oggetti 
// ad intervalli di un secondo(1000).
// calcolare lo sconto : prezzo intero per sconto diviso 100. prezzo intero - prezzo scontato.

// let prodottiApple = [
//     { id: 1, nome: 'iPhone 15 Pro Max', prezzo: 1699, sconto: 20 },
//     { id: 2, nome: 'iPad Pro 13', prezzo: 1499, sconto: 20 },
//     { id: 3, nome: 'MacBook Air m2', prezzo: 1369, sconto: 10 },
//     { id: 4, nome: 'MacBook Air m1', prezzo: 1099, sconto: 10 },
//     { id: 5, nome: 'AirPods Pro (2nd gen)', prezzo: 299, sconto: 30 },
//     { id: 6, nome: 'MacBook Air m2', prezzo: 1369, sconto: 10 },
// ];

// const capiAbbigliamento = [
//     { id: 1, nome: 'Maglia', prezzo: 30, sconto: 10 },
//     { id: 2, nome: 'Pantaloni', prezzo: 50, sconto: 20 },
//     { id: 3, nome: 'Giacca', prezzo: 100, sconto: 15 },
// ];

// const arr = [{
//     id: 1,
//     nome: "Computer",
//     prezzo: 1000,
//     sconto: 25
// }
// ]

function calcolaSconto(array, callback) {
    console.log("Sto calcolando lo sconto");

    if (!Array.isArray(array)) {
        callback(new Error("Non è un array"), null)

    } else {
        let = itemsAggiornati = array.map((item) => {
            if (typeof item.prezzo === "number" && typeof item.sconto === "number") {
                let importoSconto = (item.prezzo * item.sconto) / 100
                let prezzoScontato = item.prezzo - importoSconto
                return {
                    id: item.id,
                    nome: item.nome,
                    prezzoAggiornato: prezzoScontato.sconto,
                    scontoApplicato: item.sconto

                }

            } else {
                console.log("Non ci sono numeri nell' oggetto");

            };
        })
        callback(null, itemsAggiornati);
     itemsAggiornati.forEach((item,i) => {
        setTimeout(()=>{
            console.log(`nome prodotto${item.nome} prezzo scontato${item.prezzoAggiornato}prodotto scontato${item.prezzoScontato}%`)
          }, i * 1000);
     });
    }
}

// function errorHandle(error, data){
//     if(error){
//         console.log(error);
    
//     } else {
//         console.log(data);
//     }
// };

calcolaSconto(arr, (error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log("La tua chiamata è andata a buon fine");
    }
});

