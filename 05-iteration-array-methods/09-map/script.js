//Lets create generator for array of numbers. again
const numbers = (min, max, elements) => {
  let array = []
  for (let index = 0; index < elements; index++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return array
}
// // console.log(numbers(2, 12, 8))
// // to be able to console log both and compare need add another variable
// const temp = numbers(2, 12, 8)
// const doubleNumber = temp.map((x) => x * 2)
// console.log(temp)
// console.log(doubleNumber)

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ]

// //Lets create an array of company names
// const companyNames = companies.map((item) => item.name)
// console.log(companyNames)

// //Lets create an array with company and category
// const companyCategory = companies.map((item) => {
//   return {
//     name: item.name,
//     category: item.category,
//   }
// })
// console.log(companyCategory)

// //Lets create an array of years company is alive
// const years = companies.map((item) => {
//   return item.end - item.start
// })
// console.log(years)

// //Lets return object with name and length of years
// const length = companies.map((item) => {
//   return {
//     name: item.name,
//     length: item.end - item.start,
//   }
// })
// console.log(length)

// // LEARN TO USE F****ING RETURN STATEMENT!!!!

// //Let's chain 2 map methods, first pow 2 and after square
// const temp = numbers(4, 32, 19)
// const squareAndDouble = temp.map((x) => Math.pow(x, 2)).map((y) => Math.sqrt(y))
// console.log(temp)
// console.log(squareAndDouble)

// //Chain different methods
// const temp = numbers(6, 67, 32)
// console.log(temp)
// const newArray = temp.filter((x) => x % 2 === 0).map((y) => y * 2)
// console.log(newArray)
