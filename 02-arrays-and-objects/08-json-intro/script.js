// The keys in JSON have double quotes and the values when a string have double quotes again
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
// convert Objects to JSON string
const jsonString = JSON.stringify(person)

// convert JSON string to Object

const obj = JSON.parse(jsonString)

console.log(person)
console.log(jsonString)
console.log(obj)
