const numbers = [1, 2, 3, 4];

const num = (x) => x * 2;

function myMap(callback) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(callback(numbers[i]));
  }
  return newNumbers;
}

console.log(myMap(num));
