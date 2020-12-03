var num = "ab1v4v2ghy87"
var num1 = num.split(/([0-9]+)/);
console.log(parseInt(num1[1]) + parseInt(num1[3])) //output:5
// for (let char of num) {
//     console.log(char)
// }

const array = [1, 1, 2, 2, 2, 3, 3, 4, 4]
const uniq = new Set(array)
console.log(uniq) //output: {1,2,3,4}

const concatenate = array.concat(num)
console.log(concatenate) //output:[1, 1, 2, 2, 2, 3, 3, 4, 4, "ab1v4v2ghy87"]
console.log(concatenate.slice(3, 5)) //output:[2,2]

const mapping = array.map(value => value * 4)
console.log(mapping) // output:[4, 4, 8, 8, 8, 12, 12, 16, 16]