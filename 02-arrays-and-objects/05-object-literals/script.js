let x
const person = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '08-29-1997',
  age: null,
  profession: 'devops',
  isAdmin: true,
  friends: [
    'Jennifer',
    'Michael',
    'Emily',
    'William',
    'Jessica',
    'Christopher',
  ],
  address: {
    street: '123 Main Street',
    city: 'San Francisco',
    postCode: 94105,
    plusCode: 'QJR4+M6',
    state: 'CA',
  },
  // greet: function () {
  //   console.log(`Hello ${this.friends[this.friends.length - 1]}`)
  // },
  calculateAge: function () {
    this.age = Math.floor(
      (new Date().getTime() - new Date(this.dateOfBirth).getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    )
  },
}

// Read properties
x = person.friends[3]
x = person.address.city
// person.greet(person.friends[person.friends.length - 1])

//Mutate properties
person.friends.push('Alex')
x = person.friends

//Add properties
person.address.plusCode = 'QJR4+M6'

// //Delete properties
// delete person.lastName
// person.greet()
person.calculateAge()
x = person.age

console.log('Logged Output ~ file: script.js:16 ~ x:', x)
