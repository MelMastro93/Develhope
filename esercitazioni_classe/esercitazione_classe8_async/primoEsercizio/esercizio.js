// Le prime due funzioni in caso di successo devono ritornare un console.log.
// controllo delle promises con API

function fun1() {
    const success = true;
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
            if (success) {
                resolve(console.log("Successo"))
            } else {
                reject("error")
            }
        })
    }


}

function fun2() {
    const success  = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve
                (console.log("Successo numero 2"))
            } else {
                reject("error")
            }
        }, 2000)

    })

}
Promise - all([fun1, fun2])
.then(() => console.log("success"))
.catch((error) => error)