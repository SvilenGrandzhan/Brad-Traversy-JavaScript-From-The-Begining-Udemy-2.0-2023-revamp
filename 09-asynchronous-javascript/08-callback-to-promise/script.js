const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
]
const newPost = { title: 'Post Three', body: 'This is post' }

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false
      error ? reject('Error!') : (posts.push(post), resolve())
    })
  }, 2000)
}

const getPosts = () => {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
      document.querySelector('#posts').appendChild(div)
    })
  }, 1000)
}
const showError = (error) => {
  document.querySelector('h1').style.color = 'red'
  document.querySelector('h1').textContent = error
}

createPost(newPost).then(getPosts).catch(showError)
