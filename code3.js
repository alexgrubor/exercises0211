//Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
function add (array) {
    let sum = 0;
 for (let i = 0; i <array.length; i++) {
    sum += array[i] + 1
 }
  return sum;
}

console.log('add :>> ', add([1,2,5,7,9]));