// Challenge
//
// declare a function
function InsertAfter() {
  // Create new element to insert
  const li = document.createElement('li')
  // Add content to new li element
  li.textContent = 'Insert Me After!'
  // Select existing element to insert after
  const firstItem = document.querySelector('li:first-child')
  // Another way to select existing element
  // const firstItem = document.querySelector('li:nth-child(1)')
  // Get the parent
  const parent = document.querySelector('ul')
  parent.insertBefore(li, firstItem.nextElementSibling)
}
// Call functions
InsertAfter()

function addClasses() {
  const button = document.createElement('button')
  button.className = 'remove-item btn-link text-red'
  const icon = document.createElement('i')
  icon.className = 'fa-solid fa-xmark'
  const parent = document.querySelector('li:nth-child(2)')
  parent.appendChild(button).appendChild(icon)
}
addClasses()
