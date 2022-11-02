// You will be given an array of several arrays that each contain integers and your goal is to write a 
// function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] 
// then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. 
// Solve without and with reduce.

let array = [[3, 2], [1], [4, 12]];
let sum=0;

for (let item of array) {
  for (let i=0; i<item.length; i++) {
    sum += item[i]
  }
}

//console.log(sum);

let result = array.reduce((acc,current) => {
   for (let i = 0; i <current.length; i++) {
    acc += current[i]
   }
    return acc
},0)

// console.log(result);