const init = () => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
    .then((response) => response.json())
    .then((json) => {
      json.forEach((element) => {
        // console.log(element)
        const parent = document.getElementById('todo-list')
        const div = document.createElement('div')
        div.textContent = element.title
        div.id = `${element.id}`
        if (element.completed) {
          div.classList.add('done')
        }
        parent.appendChild(div)
      })
    })
}

init()

const update = (e) => {
  e.target.classList.add('done')
  fetch(`https://jsonplaceholder.typicode.com/todos/${e.target.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: e.target.id,
      title: e.target.textContent,
      completed: true,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

const deleteToDo = (e) => {
  console.log(`delete`)
}

document.body.addEventListener('click', update)
document.body.addEventListener('dblclick', deleteToDo)
