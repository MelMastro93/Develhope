/*
Abbiamo una fuznione che prende come parametri una quantità indefinita
di numero e una callback
La callback restituirà il prodotto dei numeri
*/

function product (callback, ... array){
    return array.reduce((acc,num)=> {
        if(array.includes(0)){
            console.log("Il numero sarà sempre 0")
        }else{
            return callback(acc, num)
        }

    })
}

function result(num1, num2){
return num1 * num2
}
console.log(product(result, 1, 2, 3, 4, 5))
