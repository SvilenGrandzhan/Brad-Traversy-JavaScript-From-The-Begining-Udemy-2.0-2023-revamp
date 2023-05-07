// insertAdjacentElement Example
// insert before filter item

function insetElement() {
  const div = document.createElement('div')
  div.textContent = 'TextContent'
  div.style.backgroundColor = 'orange'
  const parent = document.querySelector('.filter')
  return parent.insertAdjacentElement('afterbegin', div)
}
// insetElement()

// insertAdjacentText Example
function insertText() {
  const parent = document.querySelector('ul')
  // tried to select using nth-child(). it didn't work
  return parent.insertAdjacentText('afterend', 'InsertAdjacentText')
}
// insertText()

function checkUlChild() {
  const parent = document.querySelector('ul')
  console.log(`Print: ${parent.firstElementChild.innerText}`)
  console.log(`Print: ${parent.firstElementChild}`)
  // console.log(`Type of: ${typeof parent.firstElementChild}`)
}
// checkUlChild()
// insertAdjacentHTML example

// insertBefore Example
function insertBeforeItem() {
  // Select parent
  const parent = document.querySelector('ul')
  // Select child before we want to insert
  const thirdChild = document.querySelector('li:nth-child(3)')
  // Create item we want to insert
  const newElement = document.createElement('li')
  // Add some content to new element
  newElement.innerText = 'Eggs'
  // Insert before. Start with parent, say what you want to insert. Say before what element / chid you want to insert
  parent.insertBefore(newElement, thirdChild)
}
insertBeforeItem()

// Challenge - add remove button to 'Eggs'

function addButton() {
  // Select li element. It is now child 3 bc of previous insert before child 3
  const parent = document.querySelector('li:nth-child(3)')
  // verify correct element is selected
  // console.log(parent.innerText) - Confirmed, returned Eggs
  // Create button element
  const button = document.createElement('button')
  // add class name to new button element
  button.className = 'remove-item btn-link text-red'
  // Create new icon element
  const icon = document.createElement('i')
  // Add class names to icon element
  icon.className = 'fa-solid fa-xmark'
  // button.appendChild(icon)
  // parent.appendChild(button)
  // Check if can do it with one line
  parent.appendChild(button).appendChild(icon)
  // It is working!
}
addButton()

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
