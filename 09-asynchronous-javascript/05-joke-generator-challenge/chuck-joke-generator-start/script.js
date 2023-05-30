const div = document.getElementById('joke')
const button = document.getElementById('joke-btn')
const random = () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = data.value
    })
}
button.addEventListener('click', random)
document.addEventListener('DOMContentLoaded', random)
