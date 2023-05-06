let x
// Array literal
const arrayOfNumbers = [31, 1, 233, 41, 655, 46, 96, 3343, 81, 423, 43, 82, 63]
const mixedArray = [11, 'dots', true, null]

// Array constructor
const arrayOfStrings = new Array(
  'apples',
  'oranges',
  'carrots',
  'mango',
  'brocoli',
  'onions',
  'pears',
  'grape'
)

x = arrayOfNumbers[0]
x = arrayOfStrings[0]
x = `${arrayOfNumbers[4]} ${arrayOfStrings[5]}`
x = mixedArray[3]
x = arrayOfNumbers.length
x = arrayOfStrings.length
x = mixedArray.length
arrayOfStrings[4] = 'pineapples'
arrayOfStrings[arrayOfStrings.length] = 'berry' // length is always +1 to last element in array

console.log('Logged Output arrayOfNumbers:', arrayOfNumbers)
console.log('\n\nLogged Output arrayOfStrings:', arrayOfStrings)
console.log(
  '\n\nLogged Output x:',
  x,
  '\n\n\nLogged output type of x:',
  typeof x
)
