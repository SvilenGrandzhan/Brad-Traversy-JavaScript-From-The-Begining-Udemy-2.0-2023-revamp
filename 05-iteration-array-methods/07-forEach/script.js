const array = [
  'Lorem ipsum dolor',
  'sit amet consectetur adipisicing elit. Earum',
  'cum alias! Porro natus',
  'ut exercitationem fugit corrupti animi explicabo',
  'doloribus repellendus neque blanditiis optio commodi',
  'consectetur quae itaque ab possimus.',
]

const cars = [
  { brand: 'Honda', model: 's2000' },
  { brand: 'Mercedes', model: 'SLK' },
  { brand: 'BMW', model: 'M3' },
  { brand: 'Toyota', model: 'Supra' },
]

// array.forEach((item, index, arr) => console.log(`${index} - ${item}`))

const printElement = (print) => console.log(print)
const print = (print) => console.log(print.brand, print.model)
array.forEach(printElement)
cars.forEach(print)
