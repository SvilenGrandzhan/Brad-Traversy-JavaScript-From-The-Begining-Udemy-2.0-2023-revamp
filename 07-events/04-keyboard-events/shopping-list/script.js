const item = document.querySelector('#item-input')
console.log(item.value)

const keyPress = (e) => {
  const h1 = document.querySelector('h1')
  h1.innerText = e.key
}

item.addEventListener('keypress', keyPress)
