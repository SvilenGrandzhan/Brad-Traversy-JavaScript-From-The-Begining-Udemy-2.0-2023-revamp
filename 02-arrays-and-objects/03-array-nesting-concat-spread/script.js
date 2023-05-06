let x
const fruits = ['apples', 'pears', 'oranges']
const berries = ['strawberry', 'blueberry', 'raspberry']

// fruits.push(berries)
// x = fruits[3][1]

const array = [fruits, berries]
// x = array[1][0]

// x = fruits.concat(berries)
x = [...fruits, ...berries] //the same as concat()

//Flatten array
const arr = [1, 2, [3, [4, 4]], 5, [6, 7], 8]
x = arr.flat().flat() // flat method is flattening only 1 step down, to go deeper need to repeat the method

//Static methods on Array Object
//This is how you check if something is an array
x = Array.isArray(arr)
x = Array.isArray(fruits)
x = Array.isArray(berries)
x = Array.isArray(array)
x = Array.from('123456789') // Very helpful when working with HTML collections and Node lists in DOM manipulations

const a = 1
const b = 2
const c = 3

x = Array.of(a, b, c)

//Destructuring

const [first, second, ...rest] = arr

console.log(
  'Logged Output type of fruits:',
  typeof fruits,
  '\n\n\nLogged Output type of x:',
  typeof x,
  '\n\n\nLogged Output fruits:',
  fruits,
  '\n\n\nLogged Output x:',
  x,
  '\n\n\nLogged Output arr:',
  arr
)
