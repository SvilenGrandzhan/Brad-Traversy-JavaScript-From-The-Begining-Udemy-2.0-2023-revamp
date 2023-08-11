// async function getUser() {
//   const response = await fetch('https://api.github.com/users/svilengrandzhan')
//   const data = await response.json()
//   console.log(data)
// }

// getUser()

// import with CommonJS
// please notice that .js extension is no necessary to work
// import message from './utils' = ES6 version
// import with CommonJS

// const capitalizeWords = require('./utils')
// const markMoney = require('./utils')
// or

// const { capitalizeWords, markMoney } = require('./utils')

// console.log(capitalizeWords('neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit'))
// console.log(markMoney(1021111))

// const Person = require('./Person')

// const person1 = new Person('Sande', 29)
// person1.greet()

//npm packages

// const axios = require('axios')

// async function getUser() {
//   const results = await axios.get('https://api.github.com/users/svilengrandzhan')
//   console.log(results.data)
// }

// getUser()

import { capitalizeWords, markMoney } from './utils.js'
import Person from './Person.js'

console.log(capitalizeWords('hello word!'))
console.log(markMoney(92781097))

const person1 = new Person('sande', 29)

person1.greet()
