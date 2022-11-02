// You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, 
// and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3,
//  print the word "div3" directly after the number.

function divisible (low, high) {
    let result = []
    for (let i = low; i <=high; i++) {
       result.push(i)
        if (i % 3 === 0) {
           result.push( "div3")
        }
    }
    return result
}

console.log(divisible(9,26))