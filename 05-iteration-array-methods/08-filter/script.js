// const array = [
//   'Lorem ipsum dolor',
//   'sit amet consectetur adipisicing elit. Earum',
//   'cum alias! Porro natus',
//   'ut exercitationem fugit corrupti animi explicabo',
//   'doloribus repellendus neque blanditiis optio commodi',
//   'consectetur quae itaque ab possimus.',
//   'a',
// ]

// const cars = [
//   { brand: 'Honda', model: 's2000' },
//   { brand: 'Mercedes', model: 'SLK' },
//   { brand: 'BMW', model: 'M3' },
//   { brand: 'Toyota', model: 'Supra' },
// ]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 15, 15, 15]

// //Quick arrow function to find out how many times specific letter is used in array
// const findLetter = array.filter((element) => element === 'a')
// console.log(findLetter.length)

// Quick arrow function to create array. Taking for parameters min, max number and how many elements I want in array
// const numbers = (min, max, elements) => {
//   const array = []
//   for (let index = 0; index < elements; index++) {
//     array.push(Math.floor(min + Math.random() * (max - min + 1)))
//   }
//   return array
// }
// // console.log(numbers(3, 53, 12))

// // Quick arrow function to filter odd numbers
// const nums = numbers.filter((number) => {
//   return number % 2 === 0
// })
// console.log(nums)

// // Tested with numbers arrow functions it is working too.
// const evenNumbers = numbers(3, 53, 32).filter((element) => element % 2 === 0)
// console.log(evenNumbers)

// // Filter by object property
// const bestCar = cars.filter((car) => car.model === 'M3')
// console.log(bestCar[0].brand)

// Another filter by property

// const techCompany = companies.filter(
//   (company) => company.category === 'Technology'
// )
// // Standard printing
// console.log(techCompany)
// // Lets try to print only names of company with category Technology
// for (const techComp of techCompany) {
//   console.log(techComp.name)
// }

// // Lets try to create generator for array of objects
// const companies = new Array()
// const company = new Object()
// const keys = ['name', 'category', 'start', 'end']
// const values = ['Finance', 'Retail', 'Technology', 'Auto']

// const print = (elements) => {
//   for (let index = 0; index < elements; index++) {
//     const index = (min, max) => {
//       return Math.floor(min + Math.random() * (max - min + 1))
//     }
// // Can use array.map('Company' + 1). Need to test it
//     company[keys[0]] = `Company 1`
//     company[keys[1]] = values[index(0, 3)]
//     company[keys[2]] = index(1981, 2009)
//     company[keys[3]] = index(1981, 2016)
//     companies.push(company)
//   }
//   return companies
//   // console.log(companies)
// }
// // console.log(company)
// console.log(print(5))
// // It  is showing something, but not what I want and idk how to fix it. To circle back later when gain more exp.
// // Possible solution in next video is
// const stg = originalArray.filter(x => {
//  return {
//  x - take value,
//  x - take another value
// pay attention with level / element of array
//}
//})

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
// //Get companies that started in or after 1980 and ended in or before 2005
// const oldCompanies = companies.filter(
//   (year) => year.start >= 1980 && year.end <= 2005
// )
// console.log(oldCompanies)

// // Get companies that lasted 10 year or more
// const longLastingCompanies = companies.filter(
//   (year) => year.end - year.start >= 10
// )
// console.log(longLastingCompanies)
