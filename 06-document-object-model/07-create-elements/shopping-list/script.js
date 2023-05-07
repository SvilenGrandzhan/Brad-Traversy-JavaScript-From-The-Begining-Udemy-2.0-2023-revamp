const div = document.createElement('div')
div.className = 'new-class'
div.id = 'new-id'
const form = document.createElement('form')
form.className = 'form-class'
form.id = 'form-id'
const input = document.createElement('input')
input.className = 'input-class'
input.id = 'input-id'
input.name = 'new-item'
input.placeholder = 'Enter new item'
let parent = document.querySelector('.container')
parent.appendChild(div)
parent = document.querySelector('.new-class')
parent.appendChild(form)
parent = document.querySelector('.form-class')
parent.appendChild(input)
input.className = 'form-input'
