const image = document.querySelector('img')
let start
let done = false

function step(timestamp) {
  if (start === undefined) {
    start = timestamp
  }
  const elapsed = timestamp - start
  if (elapsed > 10000) {
    done = true
  }
  if (done) {
    return
  }
  //
  //   console.log(elapsed)
  //   image.style.transform = `translateX(${elapsed / 2}px)`
  //   image.style.transform = `translateY(${elapsed * 0.2}px)`
  image.style.transform = `translate(${elapsed / 20}px, ${elapsed * 0.02}px) rotate(${elapsed / 20}deg)`
  // call same function is called recursive call
  requestAnimationFrame(step)
}
requestAnimationFrame(step)
