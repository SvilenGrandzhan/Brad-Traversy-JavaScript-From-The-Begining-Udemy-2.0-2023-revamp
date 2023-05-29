// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('async')
//     resolve()
//   }, 1000)
// })

// promise.then(() => {
//   console.log('Promise done')
// })

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
  },
}

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    error ? reject('Error!') : resolve(person)
  }, 1000)
  // then(this here inside parenthesis can be everything, same as in arrays method())
})
  .then(() => {
    person.calculateAge()
    console.log(
      `${person.firstName} ${person.lastName} is ${person.age} years old.`
    )
  })
  .catch((error) => {
    document.querySelector('h1').textContent = `Promises with ${error}`
    setInterval(() => {
      document.getElementById('container').classList.toggle('error')
    }, 1000)
  })
