let x
const person = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '08-29-1997',
  age: 25,
  profession: 'devops',
  isAdmin: true,
  friends: ['Shola', 'Ade', 'Ibraheem', 'Tara', 'Bobi'],
  address: {
    street: '123 Main Street',
    city: 'San Francisco',
    postCode: 94105,
    state: 'CA',
  },
  greet: function () {
    console.log(`Hello ${this.friends[this.friends.length - 1]}`)
  },
}

// Create object using object constructor
const todo = new Object()
todo.id = 1

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
// const obj3 = { obj1, obj2 }
const obj3 = { ...obj1, ...obj2 }
const obj4 = Object.assign({}, obj1, obj2) // old way to do the same thing as spread operator

const todos = [
  { id: 1, task: 'Go to school' },
  { id: 2, task: 'Do your homework' },
  { id: 3, task: 'Relax, play some games' },
]

x = todos[0]
x = todos[todos.length - 1]
x = todos[todos.length - 1].task

x = Object.keys(person)
x = Object.values(person)
// Can't get length of an Object. Work around is request all keys of tha object and bc this is an array can you on that length prop
x = Object.keys(person).length
x = Object.entries(person)
x = person.hasOwnProperty('firstName')
x = person.hasOwnProperty('name') // Returns boolean

console.log('Logged Output ~ file: script.js:2 ~ x:', x)
