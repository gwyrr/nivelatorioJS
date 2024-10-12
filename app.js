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