let x
const array = new Array(17, 17, 3, 5, 10, 16, 6, 14, 17, 18)
// for (let x = 0; x < 10; x++) {
//   array.push(Math.floor(Math.random() * 20 + 1))
// }

array.push(13)
array.pop()
array.unshift(99)
array.shift()
// array.reverse()

x = array.includes(17)
x = array.includes(66)
x = array.indexOf(3)
x = array.indexOf(17)
x = array.indexOf(66) //if it returns negative 1 it does not exist
// x = array.slice(1, 4)
// x = array.slice(3)
// x = array.slice(null, 5) // slice is making a new array of sliced elements
// x = array.splice(3, 3) // splice is creating, making new array out of original array
x = array.splice(1, 4).reverse().toString().charAt(0)

console.log(
  'Logged Output type of array:',
  typeof array,
  '\n\n\nLogged Output array:',
  array,
  '\n\n\nLogged Output type of x:',
  typeof x,
  '\n\n\nLogged Output x:',
  x
)
