// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 231; i += 3) {
//   if (i === 33) {
//     console.log(`${i} is the lucky number`)
//   }
// }

// for (let index = 0; index < 3221; index++) {
//   let multiple = 19
//   if (index % multiple == 0) {
//     console.log(`${index} is multiple of ${multiple}`)
//   }
// }

const names = ['Brad', 'Tim', 'Sam', 'Sara', 'John']

for (let index = 0; index < names.length; index++) {
  if (index === 3) {
    console.log(`${names[3]} is the Best`)
    continue
  }
  console.log(names[index])
}
