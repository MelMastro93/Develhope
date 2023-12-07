/*
array di oggetti con utenti {nome eta}(al terzo deve mancare l' età)
aggiungere età in maniera random
 */

const userDanta = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie" },
    { name: "Diana", age: 20 }
]

function checkAge(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {
                const nuoviUtenti = array.map((user) => {
                    return array.map((user) => {
                        if (!user.age) {
                            const etaRandom = Math.floor(Math.random() * 100);
                            return { name: user.name, age: etaRandom };
                        }
                        return user;
                    });
                })
                resolve(nuoviUtenti)
            } else {
                reject("Errore: Inserire dato")
            }
        },2000)

    })
}
async function processingData(arr){
    try {
        const a= await checkAge(arr)
        console.log(a)
        
    } catch (error) {
        
    }
}
processingData(x);