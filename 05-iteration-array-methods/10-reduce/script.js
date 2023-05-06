// const numbers = (min, max, elements) => {
//   let array = []
//   for (i = 0; i < elements; i++) {
//     array.push(Math.floor(min + Math.random() * (max - min + 1)))
//   }
//   return array
// }
// const temp = numbers(1, 10, 10)
// console.log(temp)
// const sum = temp.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// )
// console.log(sum)

// Shopping cart

const cart = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 99 },
  { id: 3, name: 'Product 3', price: 150 },
]

const price = cart.reduce((acc, currentP) => acc + currentP.price, 0)
console.log(price)
