//Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
//Utilizzare setTimeout per simulare un'operazione asincrona.


function promiseDelay(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (message !== typeof " ") {
                resolve("ok")

            } else reject("ko")

        }, 2000)
    })
}
promiseDelay("Ciao").then((data)=>{
    console.log (data)
}).catch((error)=>{
    console.log(error)
})