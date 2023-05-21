// Set variables in global scope
const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearButton = document.getElementById('clear')
const filter = document.getElementById('filter')
const addBtn = document.getElementById('add')
let isEditMode = false

const displayItems = () => {
  const itemsFromStorage = getItemsFromLocalStorage()
  itemsFromStorage.forEach((element) => addItemToDOM(element))
  toggleFilterClearButton()
}

const addItem = (e) => {
  e.preventDefault()
  const newItem = itemInput.value
  if (newItem === '') {
    alert('Please, add something')
  }
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode')
    removeItemFromStorage(itemToEdit.innerText)
    itemToEdit.classList.remove('edit-mode')
    itemToEdit.remove()
    isEditMode = false
  } else {
    if (checkIfItemExists(newItem)) {
      alert('same item exists')
      return
    }
  }

  // const check = checkIfItemExists(newItem) ? alert('same item exists') : false

  // isEditMode
  //   ? (removeItemFromStorage(itemList.querySelector('.edit-mode').innerText),
  //     itemList.querySelector('.edit-mode').classList.remove('edit-mode'),
  //     itemList.querySelector('.edit-mode').remove(),
  //     (isEditMode = false))
  //   : check

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

const getItemsFromLocalStorage = () => {
  let itemsFromStorage
  localStorage.getItem('keys') === null
    ? (itemsFromStorage = [])
    : (itemsFromStorage = JSON.parse(localStorage.getItem('keys')))
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

const onClickItem = (e) => {
  const item = e.target.parentElement
  item.classList.contains('remove-item')
    ? deleteSingle(item.parentElement)
    : setItemToEdit(e.target)
}

const checkIfItemExists = (item) => {
  const itemsFromStorage = getItemsFromLocalStorage()
  return itemsFromStorage.includes(item)
}

const deleteSingle = (item) => {
  item.remove()
  removeItemFromStorage(item.textContent)
  toggleFilterClearButton()
}

const clearAll = (e) => {
  const liList = Array.from(e.target.previousElementSibling.children)
  liList.forEach((element) => element.remove())
  localStorage.removeItem('keys')
  toggleFilterClearButton()
}

const removeItemFromStorage = (item) => {
  let itemsFromStorage = getItemsFromLocalStorage()
  itemsFromStorage = itemsFromStorage.filter((element) => element !== item)
  localStorage.setItem('keys', JSON.stringify(itemsFromStorage))
}

// Function to filter items
const filterItem = (e) => {
  const text = e.target.value.toLowerCase()
  // adding added items value
  const items = document.querySelectorAll('li')
  items.forEach((element) => {
    // if (text !== element.innerText.toLocaleLowerCase) {
    // Brad has c o m p l e t l y  different way to validate
    // Need to read more about this .indexOf() !=
    element.innerText.toLocaleLowerCase().indexOf(text) != -1
      ? (element.style.display = 'flex')
      : (element.style.display = 'none')
  })
}

const toggleFilterClearButton = () => {
  itemInput.value = ''
  const items = document.querySelectorAll('li')
  items.length === 0
    ? ((filter.style.display = 'none'), (clearButton.style.display = 'none'))
    : ((filter.style.display = 'block'), (clearButton.style.display = 'block'))
  addBtn.style.backgroundColor = 'black'
  addBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item'
  isEditMode = false
}

const setItemToEdit = (item) => {
  isEditMode = true
  itemList
    .querySelectorAll('li')
    .forEach((element) => element.classList.remove('edit-mode'))
  item.classList.add('edit-mode')
  addBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item'
  addBtn.style.backgroundColor = '#228B22'
  itemInput.value = item.innerText
  // addItem()
}

const init = () => {
  // Event listeners
  // Event listener for submitting new item to the list
  itemForm.addEventListener('submit', addItem)
  // Event listener for deleting single item
  itemList.addEventListener('click', onClickItem)
  // Event Listener to clear all items in the list
  clearButton.addEventListener('click', clearAll)
  // Event Listener to filter items in the list
  filter.addEventListener('input', filterItem)
  document.addEventListener('DOMContentLoaded', displayItems)
}

init()

toggleFilterClearButton()

let age = 18
let gender = 'female'
let isAdult =
  age >= 18
    ? gender === 'male'
      ? 'He is an adult'
      : 'She is an adult'
    : 'Not an adult yet'
console.log(isAdult) // Output: "She is an adult"
