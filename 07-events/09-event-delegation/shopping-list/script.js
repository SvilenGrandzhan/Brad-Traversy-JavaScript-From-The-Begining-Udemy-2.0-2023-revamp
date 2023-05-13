const li = document.querySelectorAll('li')
const ul = document.querySelector('ul')

// li.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     e.target.remove()
//   })
// })

ul.addEventListener('click', (e) => {
  e.target.remove()
})
