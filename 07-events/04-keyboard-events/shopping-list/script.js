const item = document.querySelector('#item-input')
const keyPress = () => {
  console.log(item.textContent)
}
item.addEventListener('keypress', keyPress)
