class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`My name is ${this.name}. My age is ${this.age}`)
  }
}

export default Person
