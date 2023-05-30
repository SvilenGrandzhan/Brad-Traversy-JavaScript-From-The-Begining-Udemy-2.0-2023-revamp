const button = document.querySelector('button')
const toggle = () => {
  button.classList.toggle('danger')
  fetch('./newPost.json')
    .then((response) => response.json())
    .then((element) => {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${element.title}</strong> - ${element.body}`
      document.querySelector('#posts').appendChild(div)
    })
}

fetch('./posts.json')
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((element) => {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${element.title}</strong> - ${element.body}`
      document.querySelector('#posts').appendChild(div)
    })
  })

button.addEventListener('click', toggle)
