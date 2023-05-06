// const number = new Number(5)
const number = new Number(5.4527)
// const number = new Number(21312341235)
let x

x = number.toString()
x = number.toString().length
x = number.toFixed(2) // NB This is converting to string. And it is rounding the number
x = number.toPrecision(2) // NB Again this is converting to string. And it is rounding the number
x = number.toExponential(2)

console.log('Logged Output type of x:', typeof x, '\n\n\nLogged Output x:', x)
