const button = document.querySelector('button')
const toggle = () => button.classList.toggle('danger')
button.addEventListener('click', toggle)

// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// const toggle = (e) => e.target.classList.toggle('danger')

document.querySelector('button').addEventListener('click', toggle)

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
]

const createPost = (element, cb) => {
  setTimeout(() => {
    posts.push(element)
    cb()
  }, 2000)
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((element) => {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${element.title}</strong> - ${element.body}`
      document.querySelector('#posts').appendChild(div)
    })
  }, 1000)
}
const newPost = { title: 'Post Three', body: 'This is post three' }

// getPosts()
createPost(newPost, getPosts)
