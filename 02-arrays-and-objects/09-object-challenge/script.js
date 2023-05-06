const library = [
  {
    title: 'Shogun',
    author: 'James Clavell',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Leaders eat last',
    author: 'Simeon Sinek',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The name of the Wind',
    author: ' Patrick Rothfuss',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
]

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

console.log(library[0].status.read)
console.log(library[1].status.read)
console.log(library[2].status.read)

// const { title: firstBook } = library[0]

// console.log(firstBook)

const jsonLibrary = JSON.stringify(library)

console.log(jsonLibrary)
