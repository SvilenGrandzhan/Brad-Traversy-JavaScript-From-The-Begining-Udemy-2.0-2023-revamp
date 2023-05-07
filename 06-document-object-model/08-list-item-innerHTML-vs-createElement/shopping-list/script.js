// const text = document.createElement('i')
// text.className = 'fa-solid fa-xmark'
// const button = document.createElement('button')
// button.className = 'remove-item btn-link text-red'
// appendC(button, text)
// // let parent = button
// // parent.appendChild(text)
// const li = document.createElement('li')
// // li.innerText = 'Chocolate'
// // This can be done better with document.createTextNode
// li.appendChild(document.createTextNode('Chocolate'))
// appendC(li, button)
// // parent = li
// // parent.appendChild(button)
// parent = document.querySelector('#item-list')
// // parent.appendChild(li)
// appendC(parent, li)
// function appendC(parent, child) {
//   return parent.appendChild(child)
// }

// // Lets try to do it as Brad calling a function. This way can ad multiple elements to ul
// function createItem(item) {
//   const li = document.createElement('li')
//   li.appendChild(document.createTextNode(item))
//   const button = document.createElement('button')
//   button.className = 'remove-item btn-link text-red'
//   const i = document.createElement('i')
//   i.className = 'fa-solid fa-xmark'
//   button.appendChild(i)
//   li.appendChild(button)
//   const parent = document.querySelector('#item-list')
//   parent.appendChild(li)
// }

// // Lets try do it as arrow functions
// const createItem = (item) => {
//   const li = document.createElement('li')
//   li.appendChild(document.createTextNode(item))
//   const button = document.createElement('button')
//   button.className = 'remove-item btn-link text-red'
//   const i = document.createElement('i')
//   i.className = 'fa-solid fa-xmark'
//   button.appendChild(i)
//   li.appendChild(button)
//   document.querySelector('#item-list').appendChild(li)
//   //More compact like that
// }

// // Lets try to do an array of strings
// const array = [
//   'Lorem',
//   'ipsum',
//   'dolor',
//   'sit',
//   'amet',
//   'consectetur',
//   'adipisicing',
//   'elit.',
//   'Quas,',
//   'necessitatibus',
//   'aspernatur',
// ]

// array.forEach((element) => {
//   createItem(element)
// })

// // createItem('Chocolate')
// // createItem('Eggs')
// // createItem('Water')
// // createItem('Cheese')
