// Crea una funzione chiamata somma che accetta
// un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti.
// -Stampa in console l'output della funzione somma.

function somma(...numbers){ 
    return numbers.reduce ((a, numbers) => a + numbers, 0 );

}

let mySum = somma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(mySum);