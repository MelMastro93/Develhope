// Vogliamo una funzione che prende in imput l' email, se non c'è la chiocciola
// gestiamo l' errore, altrimenti possiamo lasciare così

function checkEmail(){
    const error = new Error("La tua mail non è valida")
    if(mail.includes("@")){
        callback(null, `"La tua mail : ${mail} è valida`)
    } else callback(error, null);
}
let mail = "melissa.mastro@gmail.com";

function handleError(error, data){
    if (error) {
        console.log(error);
    
    }else  console.log(data)
}


// checkEmail(mail,(error, data)=>{
//     if (error){
//         console.log(error)
//     } else {console.log(data)}
// })