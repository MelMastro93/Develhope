/*
Acquisto online di prodotti
variabile con all' interno un oggetto,
coppie chiave : valore --> prodotto: numero prodotto

funzione1 : controllare se il prodotte c'è e poi fare l' ordine
funzione2 : processiamo l' ordine non acceda 
*/

const products = {
    iphone: 4,
    mac: 3,
}

function checkProduct(product, quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products[product] >= quantity) {
                resolve(`Il prodotto è disponibile ${product[quantity]}`)
            } else {
                reject(`Il prodotto non disponibile ${product}`)
            }
        }, 2000)

    })
}

async function processOrder(product, quantity){
    try {
        await checkProduct(product, quantity);
        console.log("il tuo ordine verrà processato")

    } catch (error) {
        console.log(error);
    }
    
}

processOrder("mac",4)