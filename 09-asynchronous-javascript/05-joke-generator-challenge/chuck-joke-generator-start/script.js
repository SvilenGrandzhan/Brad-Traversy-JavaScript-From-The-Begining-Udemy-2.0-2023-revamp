const div = document.getElementById('joke')
const button = document.getElementById('joke-btn')
const random = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
  xhr.onreadystatechange = function () {
    // console.log(JSON.parse(this.responseText))
    div.innerHTML = JSON.parse(this.responseText).value
    // console.log(this.responseText)
  }
  xhr.send()
}
button.addEventListener('click', random)
document.addEventListener('DOMContentLoaded', random)
