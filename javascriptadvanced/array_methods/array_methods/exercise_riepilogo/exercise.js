/*In questo esercizio dato un array di studenti:
+Utilizza forEach per stampare i nomi degli studenti.
+Utilizza find per trovare uno studente con un voto superiore a 90.
+Utilizza reduce per calcolare la media dei voti degli studenti.
+Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.*/


const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

studenti.forEach(studNom => console.log(studNom.nome));

let vote = studenti.find(votStud => votStud.voto > 90);
console.log (vote);

let sum = studenti.reduce((a, grade) => a + grade.voto, 0);
let media = (sum / studenti.length);
console.log( media );


let nomUp = studenti.map(nomUpp => nomUpp.nome.toUpperCase());
console.log(nomUp)

let filtStud = studenti.filter(voti => voti.voto > 85);
console.log(filtStud);

  











