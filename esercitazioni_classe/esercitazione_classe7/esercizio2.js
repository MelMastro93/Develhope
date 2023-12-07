


let persons = [
    {
        nome: "Melissa",
        cognome: "Mastro",
        age: 30,
        email: "mela@gmail.com"

    },

    {
        nome: "Luca",
        cognome: "Carmboni",
        age: 40,
        email: "pera@gmail.com"

    },

    {
        nome: "Giovanni",
        cognome: "Mastrangelo",
        age: 17,
        email: "ciliegia@gmail.com"

    }

]

function createUsername(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(array)) {

                array.map((eL) => {
                    if (el.name && el.surname) {
                        let username = `${el.name.toLowerCase()}`;
                        return {
                            username: newUsername,
                            name: el.name,
                            surname: el.surname,
                            age: el.age,
                            email: el.email
                        };

                    } else console.log("Questo utente non ha nome e cognome:", el.email)
                });
            }

        }, 2000)

    });
}