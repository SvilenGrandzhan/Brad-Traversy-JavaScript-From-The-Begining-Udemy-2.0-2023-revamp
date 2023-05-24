const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task complete')
    resolve()
  }, 1000)
})

promise.then(() => {
  console.log('Promise paid')
})
