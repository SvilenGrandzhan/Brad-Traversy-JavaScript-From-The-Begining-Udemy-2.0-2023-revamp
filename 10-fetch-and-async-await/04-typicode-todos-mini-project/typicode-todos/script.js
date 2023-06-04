const form = document.getElementById('todo-form')
const divTodoList = document.getElementById('todo-list')

const loadItems = () => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
    .then((response) => response.json())
    .then((json) => {
      json.forEach((element) => addTodo(element))
    })
}

const addTodo = (item) => {
  const div = document.createElement('div')
  div.appendChild(document.createTextNode(item.title))
  div.setAttribute('data-id', item.id)
  if (item.completed) {
    div.classList.add('done')
  }
  document.getElementById('todo-list').appendChild(div)
}

const newItem = (e) => {
  e.preventDefault()
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      userId: 1,
      title: form.firstElementChild.value,
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => addTodo(json))
}
const updateItem = (e) => {
  form.firstElementChild.value = e.target.textContent
}

const init = () => {
  document.addEventListener('DOMContentLoaded', loadItems)
  form.addEventListener('submit', newItem)
  divTodoList.addEventListener('click', updateItem)
}

init()
