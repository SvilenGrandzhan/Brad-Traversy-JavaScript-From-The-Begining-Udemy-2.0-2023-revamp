const array = ['book', 'dog', 'cat', 'pillow', 'bamboo']
const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in ipsum iure? Quae facere saepe nostrum dolores exercitationem voluptates sequi nemo, ratione suscipit at quidem necessitatibus odit perferendis in ad.'

const people = [
  { name: 'Saki' },
  { name: 'Tara' },
  { name: 'Bobi' },
  { name: 'Alex' },
]

// for (const index of array) {
//   console.log(index)
// }

// for (const key of people) {
//   console.log(key.name)
// }
// ???? - Maybe

// let counter = 0
// for (const letter of lorem) {
//   if (letter === 'a') {
//     counter++
//   }
//   console.log(`counter is ${counter}`)
// }

const count = (counter, array) => {
  for (const index of array) {
    if (index === 'i') {
      counter++
    }
  }
  return counter
}

console.log(count(0, lorem))
