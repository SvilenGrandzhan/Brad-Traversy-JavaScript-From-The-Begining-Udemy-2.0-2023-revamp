// Set variables in global scope
const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
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
  // Adding validation for existing li element
  // if (itemList.childElementCount === 0) {
  //   createFilter()
  //   createClearAllButton()
  // }
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
  removeFilterClearB()
  // Something I forgot. Clear the value of itemInput
  itemInput.value = ''
}

// Delete single item. Later delete all items
// For single delete will do event delegation on the parent item
// const deleteSingle = (e) => e.target.remove()
// It works, but it is not targeting the X icon
// if I click anywhere on li element it removes item
// In Brad's version he is adding a verification by className
const deleteSingle = (e) => {
  // if (e.target.parentElement.className === 'remove-item btn-link text-red') {
  // // In my version it point to exact className
  // // Brad's version is more flexible using classList.contains()
  if (e.target.parentElement.classList.contains('remove-item')) {
    // This is something new to me. NB to learn
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove()
    }
  }
  // // Let's check if we have any li elements left
  // // If we don't have any delete filter and clear all
  // if (itemList.childElementCount === 0) {
  //   filter.remove()
  //   clearButton.remove()
  // }
  removeFilterClearB()
}

// // When everything is deleted incl filter and clearButton
// // and add new item, need to recreate filter and clearButton
// const createFilter = () => {
//   const input = document.createElement('input')
//   input.type = 'text'
//   input.id = 'filter'
//   input.className = 'form-input-filter'
//   input.placeholder = 'Filter Items'
//   document.querySelector('.filter').appendChild(input)
// }

// // Recreate clearAll button
// const createClearAllButton = () => {
//   const clearButton = document.createElement('button')
//   clearButton.id = 'clear'
//   clearButton.className = 'btn-clear'
//   // Not sure if this is the right way to do it.
//   // Will follow Brad's idea to make it with textNode
//   const textNode = document.createTextNode('ClearAll')
//   clearButton.appendChild(textNode)
//   document.querySelector('.container').appendChild(clearButton)
// }

// Now to clear all li element with ClearAll button
const clearAll = (e) => {
  // Pointing to previous sibling (ul) children and converting to array
  const liList = Array.from(e.target.previousElementSibling.children)
  // use for each to remove all li elements
  liList.forEach((element) => {
    element.remove()
  })
  // // Also remove filter, if we don't have any elements
  // filter.remove()
  // // Also remove clearButton
  // clearButton.remove()
  // // Brad's version is so easy and elegant
  // while (itemList.firstChild) {
  //   itemList.removeChild(itemList.firstChild)
  // }
  // Will keep my version except for remove filter and clearB
  removeFilterClearB()
}

// Function to filter items
const filterItem = (e) => {
  // Watching Brad, I guess I can make it better
  const text = e.target.value.toLowerCase()
  // adding added items value
  const items = document.querySelectorAll('li')
  items.forEach((element) => {
    // Brad has c o m p l e t l y  different way to validate
    // if (text !== element.innerText.toLocaleLowerCase) {
    if (element.innerText.toLocaleLowerCase().indexOf(text) != -1) {
      // Another take way: If wonder what display to put opposite to none
      // check original style in HTML file
      element.style.display = 'flex'
    } else {
      element.style.display = 'none'
    }
  })
}

const removeFilterClearB = () => {
  if (itemList.childElementCount === 0) {
    filter.style.display = 'none'
    clearButton.style.display = 'none'
  } else {
    filter.style.display = 'block'
    clearButton.style.display = 'block'
  }
}

// Event listeners
// Event listener for submitting new item to the list
itemForm.addEventListener('submit', addItem)
// Event listener for deleting single item
itemList.addEventListener('click', deleteSingle)
// Event Listener to clear all items in the list
clearButton.addEventListener('click', clearAll)
// Event Listener to filter items in the list
filter.addEventListener('input', filterItem)

removeFilterClearB()
