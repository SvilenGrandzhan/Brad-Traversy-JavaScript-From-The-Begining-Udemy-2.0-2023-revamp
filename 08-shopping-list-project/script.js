// Set variables in global scope
const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearButton = document.getElementById('clear')
const filter = document.getElementById('filter')

const displayItems = () => {
  const itemsFromStorage = getItemsFromLocalStorage()
  itemsFromStorage.forEach((element) => {
    addItemToDOM(element)
  })
  toggleFilterClearButton()
}

const addItem = (e) => {
  e.preventDefault()
  const newItem = itemInput.value
  if (newItem === '') {
    alert('Please, add something')
  }
  addItemToDOM(newItem)
  addToLocalStorage(newItem)
  toggleFilterClearButton()
  itemInput.value = ''
}

const addItemToDOM = (item) => {
  const newLiItem = document.createElement('li')
  newLiItem.appendChild(document.createTextNode(item))
  const button = createButton('remove-item btn-link text-red')
  newLiItem.appendChild(button)
  itemList.appendChild(newLiItem)
}

const addToLocalStorage = (item) => {
  const itemsFromStorage = getItemsFromLocalStorage()
  itemsFromStorage.push(item)
  localStorage.setItem('keys', JSON.stringify(itemsFromStorage))
}

const getItemsFromLocalStorage = (item) => {
  let itemsFromStorage
  if (localStorage.getItem('keys') === null) {
    itemsFromStorage = []
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('keys'))
  }
  return itemsFromStorage
}

const createButton = (classNames) => {
  const button = document.createElement('button')
  button.className = classNames
  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button
}

const createIcon = (classNames) => {
  const icon = document.createElement('i')
  icon.className = classNames
  return icon
}

const deleteSingle = (item) => {
  item.remove()
  removeItemFromStorage(item.textContent)
  toggleFilterClearButton()
}

const clearAll = (e) => {
  const liList = Array.from(e.target.previousElementSibling.children)
  liList.forEach((element) => {
    element.remove()
  })
  localStorage.removeItem('keys')
  toggleFilterClearButton()
}

const removeItemFromStorage = (item) => {
  let itemsFromStorage = getItemsFromLocalStorage()
  itemsFromStorage = itemsFromStorage.filter((element) => element !== item)
  localStorage.setItem(JSON.stringify(itemsFromStorage))
}

const onClickItem = (e) => {
  const item = e.target.parentElement
  if (item.classList.contains('remove-item')) {
    item.parentElement.remove()
  }
}

// Function to filter items
const filterItem = (e) => {
  const text = e.target.value.toLowerCase()
  // adding added items value
  const items = document.querySelectorAll('li')
  items.forEach((element) => {
    // Brad has c o m p l e t l y  different way to validate
    // if (text !== element.innerText.toLocaleLowerCase) {
    // Need to read more about this .indexOf() !=
    if (element.innerText.toLocaleLowerCase().indexOf(text) != -1) {
      // Another take way: if I wonder what display to put opposite to none
      // check original style in HTML file
      element.style.display = 'flex'
    } else {
      element.style.display = 'none'
    }
  })
}

const toggleFilterClearButton = () => {
  const items = document.querySelectorAll('li')
  if (items.length === 0) {
    filter.style.display = 'none'
    clearButton.style.display = 'none'
  } else {
    filter.style.display = 'block'
    clearButton.style.display = 'block'
  }
}

const init = () => {
  // Event listeners
  // Event listener for submitting new item to the list
  itemForm.addEventListener('submit', addItem)
  // Event listener for deleting single item
  itemList.addEventListener('click', deleteSingle)
  // Event Listener to clear all items in the list
  clearButton.addEventListener('click', onClickItem)
  // Event Listener to filter items in the list
  filter.addEventListener('input', filterItem)
  document.addEventListener('DOMContentLoaded', displayItems)
}

init()

toggleFilterClearButton()
