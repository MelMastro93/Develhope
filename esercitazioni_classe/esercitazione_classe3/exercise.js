/*
Creare una funzione che ci modifichi le parole a cominciare da un modificatore
array di parole
il risultato deve o farci le parole in UpperCase o LowerCase o dirci il numero di caratteri che è 
compresa in ogni stringa
 */

let arrayDiParole = ['Rocket (89P13)', 'Starlord', 'Gamora', 'Groot', 'Drax']

function stringModifier(modificatore, ...strings) {

    let resultString = " "
    switch (modificatore) {
        case "UpperCase":
            resultString = strings.map(string => string.toUpperCase());
        case "LowerCase": 
            resultString = strings.map (string => string.toLoweCase());
        case "lenght":
            resultString = strings.map(string => `${string} (${string.lenght}`());
            break;

        default:
            console.log("modificatore non valido");

            
    }
    console.log("Sto modificando le parole.")

    const id =setInterval(()=>{console.log("...")}, 500);

        setTimeout(()=>{
            clearInterval(id);
            console.log(resultString)
        }, 2000)

}

stringModifier("UpperCase", ...arrayDiParole)