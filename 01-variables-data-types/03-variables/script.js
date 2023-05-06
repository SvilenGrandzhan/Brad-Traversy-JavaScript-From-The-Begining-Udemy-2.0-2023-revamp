// Ways to declare a variable
// var, let, const

let firstName = 'Svilen'
let lastName = 'Gradnzhan'

console.log(firstName, lastName)

let age = 30

console.log(age)

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

//Re-asigning variables

age = 31
console.log(age)

let score

score = 1

if (true) {
  score++
}
console.log('Logged Output ~ file: script.js:35 ~ score:', score)

const x = 100

// x = 200
//re-assigning const is returning error

// const score1; - this returns error too

//but we can do let

let score1

// but we can assign arrays and objects to const

const array = [1, 2, 3, 4, 54, 5, 6, 7, 8]

const svilenGrandzhan = {
  firstName: 'Svilen',
  lastName: 'Grandzhan',
  profession: 'donkey',
  favMusic: 'GnR',
}

array.push(111)
console.log('Logged Output ~ file: script.js:60 ~ array:', array)

svilenGrandzhan.profession = 'shushumiga'
console.log(
  'Logged Output ~ file: script.js:63 ~ svilenGrandzhan:',
  svilenGrandzhan
)

//making changes to const variables
