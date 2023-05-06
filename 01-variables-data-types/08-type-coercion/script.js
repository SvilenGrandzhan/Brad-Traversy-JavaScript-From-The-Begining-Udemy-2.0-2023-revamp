let x

x = 5 + '5' // value: 55 type: string
x = 5 + Number('5') // value: 10 type: number
x = 5 * '5' // value: 25 type: number (Reason: making multiplication between string does not make sense)

x = 5 + null // value: 5 type: number

//for explanation
x = Number(null) // value: 0 type: number

x = 5 + true // value: 6 type: number

x = Number(true) //value: 1 type: number
x = Number(false) //value: 0 type: number

x = 5 + undefined // value: NaN type: number

console.log(
  'Logged Output x: ',
  x,
  '\n\nLogged Output the type of x: ',
  typeof x
)
