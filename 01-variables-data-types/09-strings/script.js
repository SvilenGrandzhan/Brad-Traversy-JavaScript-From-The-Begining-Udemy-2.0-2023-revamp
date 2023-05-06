let x

const name = 'Saki'
const age = 57
const variable1 = 30
const variable2 = 30

// Template literals. also known as String literals
x = 'Hello, my name is ' + name + " and I'm " + age + ' years old.' // Note the quotes around the I'm // Initial line was 'and I\'m '//auto converted by vscode
x = `Hello, my name is ${name} and I'm ${age} years old.`
x = `Hello, my name is ${name} and I'm ${30 + 30} years old.`
x = `Hello, my name is ${name} and I'm ${variable1 + variable2} years old.`

// String Properties and Methods

//when const s = 'Hello World' is typed what is JS doing behind the scene is
const s = new String('Hello World')

x = s.length // value: 11 Type: number

//How to access to every value of that string. Treat that string as array
x = s[0]
x = s[1]
// x = s.push('!') // This does not work => array methods don't work ?
x = s.__proto__
x = s.concat('!') // HA!! Prototype has his own methods. Accessible by s.__proto__
x = s.slice(4) // delete 4 values in the beginning
x = s.match('o') // index 4
x = s.matchAll('o') // I don't have any idea. Maybe will learn that later
x = s.replace('World', 'Saki') // Output 'Hello Saki'
b = new String(
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nisi nulla. Accusamus neque maiores provident temporibus quas accusantium officiis unde! Consequuntur quidem accusamus alias soluta hic quasi eum deserunt dicta.'
)
x = b.split(' ')
x = b.toLowerCase()
x = b.toUpperCase()
x = s.substring(3, 5)
x = s.substring(2, 7)
x = s.bold()
x = s.italics()

console.log(
  'Logged Output x: ',
  x,
  '\n\nLogged Output the type of x: ',
  typeof x
)

console.log(
  '\n\n\nLogged Output x: ',
  s,
  '\n\nLogged Output the type of x: ',
  typeof s
)
