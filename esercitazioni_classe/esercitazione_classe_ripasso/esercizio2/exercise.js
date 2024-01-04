/*
array di oggetti con prodotti, id, nome, prezzo
scrivi una fnzione che calcoli prima il prezzo scontato 20%
e poi dovrà aggiungere due voci: nuovo prezzo e quantità di sconto.
primise e async/await 
*/

const products = [
    {
        id: 1,
        nameProduct: "iPhone",
        price: 850
    },

    {
        id: 2,
        nameProduct: "Tablet",
        price: 1150
    },
    {
        id: 3,
        nameProduct: "Mac",
        price: 2500
    },
];

function setPrice(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Array.isArray) {
                reject(new Error("Non hai fornito un Array valido"))
            } else {
                let discountMap = array.map((product) => {
                    const discount = product.price * 0.2
                    const discountedPrice = product.price - discount
                    return {
                        ...product,
                        newPrice: discountedPrice,
                        amount: discount
                    }

                })
                resolve(discountMap)

            }

        }, 2000)
    })
}

// setPrice(products).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error.message)
// })

async function handleDiscount(array){
    try {
        let data = await setPrice(array)
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
}

handleDiscount(products)