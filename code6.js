//Remove duplicates of an array and return an array of only unique elements  
let array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let newArray =array.filter ((item, index) => {
    return array.indexOf(item) == index
})


console.log(newArray)
