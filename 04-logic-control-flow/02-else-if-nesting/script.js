// const date = new Date()
const date = new Date(10, 30, 2024, 8, 0, 0)
const hours = date.getHours()
const mins = date.getMinutes()
const day = date.getDay()

if (hours < 12) {
  console.log(`Good morning`)
} else if (12 <= hours < 18) {
  console.log(`Good afternoon`)
} else {
  console.log(`Good night`)
}

if (hours >= 8 && day == '1') {
  console.log(`multiple conditions`)
}

console.log(`\nLogged Output hours:\n\n\n${hours}:${mins}h`)

console.log('\nLogged Output date:\n\n\n', date)
