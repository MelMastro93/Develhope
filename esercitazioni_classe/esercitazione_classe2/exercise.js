/*
Calcolatrice
operazioni tra un array di numeri  che ci ritorna che tipo 
di operazione viene svolta quando viene eseguita la funzione

- funzione che contiene una funzione
- impostare il setTimeOut
*/

function operations(operator, ...numbers) {

    let result;
    
    function runOperation() {

        if(operator == " + ") {
           result = numbers.reduce((a, number) => a + number, 0);
        } else if (operator == "/") {
            if(numbers.some(n => n == 0)){
                console.log("Impossibile dividere per 0")
            }else {result = numbers.reduce((a,number) => a  / number)}

        } else if (operator == "*") {
            result = numbers.reduce((a,number)=> a * number, 1)

        } else if(operator == "-") {
            result = numbers.reduce((a, number) => a - number, 0)
        } else {
            console.log("Errore: operazione Impossibile");
            
        }

        console.log(`il risultato è ${result}`);
        

    }    
    
    console.log("Sto calcolando il risultato");
    setTimeout(runOperation, 2000);
    
    let id = setInterval(() => console.log(" . "), 500);
     setTimeout(() => {
             clearInterval(id)
     }, 1550)
     
     
}

    operations(" + ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    // let divisione = (" / ", 1, 3, 4, 5, 6, 7, 8, 9, 10);
    // let sottrazione = (" - ", 1, 3, 4, 5, 6, 7, 8, 9, 10);
    // let moltiplicazione = operations(" * ", 1, 3, 4, 5, 6, 7, 8, 9, 10);

    // console.log(console. log( `somma: ${somma}; sottrazione: ${sottrazione}; moltiplicazione: ${moltiplicazione}; divisione: ${divisione}`))