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
  calculateAge: function () {
    this.age = Math.floor(
      (new Date().getTime() - new Date(this.dateOfBirth).getTime()) /
        (1000 * 60 * 60 * 24 * 365.25)
    )
    return this.age
  },
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    error ? reject('Error: Something went wrong') : resolve(person)
  }, 1000)
})

promise
  .then((user) => {
    console.log(user)
    return person.address
  })
  .then((address) => {
    console.log(address)
    return person.address.city
  })
  .then((city) => console.log(city))
  .catch((error) => console.log(error))
