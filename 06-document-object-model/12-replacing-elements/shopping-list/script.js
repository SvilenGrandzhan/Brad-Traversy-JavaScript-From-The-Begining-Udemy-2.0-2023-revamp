const replaceFirstItem = () => {
  const firstItem = document.querySelector('li:first-child')
  const li = document.createElement('li')
  li.innerText = 'Eggs'
  return firstItem.replaceWith(li)
}
// replaceFirstItem()

const arrayNewShoppingItems = ['Cheese', 'Eggs', 'Cream', 'Coffee']
const replaceAllItems = () => {
  const allItems = document.querySelectorAll('li')
  allItems.forEach((item, index) => {
    item.replaceWith(arrayNewShoppingItems[index])
  })
}
// replaceAllItems()

const replaceChild = () => {
  const newLi = document.createElement('li')
  newLi.innerText = 'Eggs'
  const li = document.querySelector('li:first-child')
  li.parentElement.replaceChild(newLi, li)
}
replaceChild()
