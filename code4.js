//Given a string, reverse each word in the sentence
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

let string = 'Welcome to this Javascript Guide!'
let newString = string.split(' ');
let result = []

for (let word of newString) {
    let newWord= word.split('').reverse().join('')
     result.push(newWord)
}

console.log(result.join(' '));