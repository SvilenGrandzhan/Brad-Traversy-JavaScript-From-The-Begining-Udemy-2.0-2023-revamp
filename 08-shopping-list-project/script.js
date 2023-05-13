// Set variables in global scope
const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const addButton = document.getElementById('add')
const clearButton = document.getElementById('clear')
const filter = document.getElementById('filter')

// Functions
// Fist function collect itemInput value and check if it is empty sting
const addItem = (e) => {
  //Prevent from submit
  e.preventDefault()
  // // Simple test to check if event listener is working
  // console.log(itemInput.value)
  // // My version of validation of input value
  // if (itemInput.value !== ' ') {
  //   // validation of if statement
  //   // console.log(`Print of input.value ${itemInput.value}`)
  // } else {
  //   // alert('input something')
  // }
  // Brad's version is better it is only one if, no else
  if (itemInput.value === ' ') {
    alert('input something')
    return
    // And uses return!
  }
  // // Checking if it working in case it is not empty string
  // console.log(`Print of itemInput value: ${itemInput.value}`)
  createNewLiElement()
}
// Second function. Create new li element
// My version
const createNewLiElement = () => {
  const newLiElement = document.createElement('li')
  // // This can be done better
  // newLiElement.innerText = itemInput.value
  // Brad's version and bottom down append another textNode child
  const textNode = document.createTextNode(itemInput.value)
  const newButton = document.createElement('button')
  newButton.className = 'remove-item btn-link text-red'
  const newIcon = document.createElement('i')
  newIcon.className = 'fa-solid fa-xmark'
  newButton.appendChild(newIcon)
  // Be aware of the order of appending
  newLiElement.appendChild(textNode)
  newLiElement.appendChild(newButton)
  itemList.appendChild(newLiElement)
  // Something I forgot. Clear the value of itemInput
  itemInput.value = ''
}

// Event listeners
itemForm.addEventListener('submit', addItem)
// itemInput.addEventListener('keypress', (e) => console.log(e.target.value))
addButton.addEventListener('submit', (e) => console.log(e.target))
clearButton.addEventListener('submit', (e) => console.log(e.target))
filter.addEventListener('keypress', (e) => console.log(e.target))
