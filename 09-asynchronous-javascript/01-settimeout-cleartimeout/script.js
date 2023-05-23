const timerID = setTimeout(() => changeText(), 3000)

console.log('Hello from global scope')

const changeText = () => {
  document.querySelector('h1').textContent = 'Hello from Call Back'
}

// function changeText() {
//   document.querySelector('h1').textContent = 'Hello from named function'
//   document.querySelector('h2').textContent = 'This is setTime example'
// }

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerID)
  console.log('H1 text Content change canceled')
})
