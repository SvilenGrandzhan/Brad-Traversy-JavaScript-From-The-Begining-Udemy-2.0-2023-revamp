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

//Naming
const name = 'James'
const familyName = 'Clavell'
const number = 25

const author = {
  name,
  familyName,
  number,
}

x = author.familyName

//Destructuring

const {
  age,
  address: { city }, // Can be nested as much we want. Question mark: how we can address element of an array inside of Object?
  profession: occupation, //Can also rename during the destructuring
} = person

console.log('Logged Output x :', x)
console.log('Logged Output City address and Age :', age, city, occupation)
