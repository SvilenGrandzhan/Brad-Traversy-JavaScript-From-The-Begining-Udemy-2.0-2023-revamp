const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const h1 = document.querySelector('h1')

const onItemInput = (e) => console.log(e.target.value)
const onPriorityInput = (e) => console.log(e.target.value)
const onChecked = (e) => {
  h1.style.backgroundColor = 'white'
  if (e.target.checked) {
    h1.style.backgroundColor = 'orange'
  }
}
const onFocus = () => {
  itemInput.style.outlineStyle = 'solid'
  itemInput.style.outlineWidth = '2px'
  itemInput.style.outlineColor = 'red'
}
const onBlur = () => {
  itemInput.style.outlineStyle = 'none'
}

itemInput.addEventListener('input', onItemInput)
priorityInput.addEventListener('input', onPriorityInput)
checkbox.addEventListener('input', onChecked)
itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)
