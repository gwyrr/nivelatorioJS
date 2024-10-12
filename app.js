// let button = document.getElementById("mainButton");
// button.addEventListener("click", function() {
//     alert ("hola mundo");

// });


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++ ){
//     if (numbers[i] % 2 == 0){
//         sum += numbers[i];
//     }
// }
// console.log(sum);

let numbers = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let path = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = path;
    }
  }
}

console.log(numbers);

let words = ["hello", "world", "javascript"];
let wordLengths = words.map((word) => word.length);
console.log(wordLengths);

const persons = [
    {
        firstname: "John",
        lastName: "Smith",
    },
    {
        firstName: "aura",
        lastName: "jonas",
    },
    {
        firstName: "keslie",
        lastName: "simpson",
    }
];

// [
//     "maria paula cañarte",
//     "gabriela morales",
//     "emanuel rodas",
// ]

// function positionName(persons){
//     let names = persons.map(person => person.firstName + " " + person.lastName);
//     return names;
// }
// let results = positionName(persons)

// console.log(results);

const numeros = [5, 12, 8, 130, 44];
const hayMayorDeCincuenta = numeros.some(num => num > 50);

console.log(hayMayorDeCincuenta); // true