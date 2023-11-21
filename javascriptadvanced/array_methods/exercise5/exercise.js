/*Implementare la funzione ageAverage che,
dato un array di persone, calcola l'età media.*/

function calculateAverageAge(persons) {
  //return persons.reduce((a, person) => (a + person.age)/10, 0); 
  //Errore "3.1575514286" 
  const sum = persons.reduce((a, person) => (a + person.age), 0);
  const average = sum / persons.length
  return average;

}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);