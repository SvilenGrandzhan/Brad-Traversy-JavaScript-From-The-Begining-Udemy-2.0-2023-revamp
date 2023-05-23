let interval

// const myCallBack = () => (interval = setInterval(colorChange, 1000))
// const myCallBack = () => (interval = setInterval(increasingGreenColor, 1000))
const myCallBack = () => (interval = setInterval(randomGreenColor, 1000))
const stopChange = () => {
  clearInterval(interval),
    (document.querySelector('h1').textContent = 'setInterval & clearInterval'),
    (document.body.style.backgroundColor = 'white')
}

// const colorChange = () => {
//   const bodyStyle = document.body.style
//   bodyStyle.backgroundColor !== 'black'
//     ? ((bodyStyle.backgroundColor = 'black'), (bodyStyle.color = 'white'))
//     : ((bodyStyle.backgroundColor = 'white'), (bodyStyle.color = 'black'))
// }

const randomGreenColor = () => {
  const random1 = Math.floor(Math.random() * 100 + 1)
  const random2 = Math.floor(Math.random() * 100 + 1)
  document.body.style.backgroundColor = `rgb(${random1}, 255, ${random2})`
  document.querySelector('h1').textContent = `rgb(${random1}, 255, ${random2})`
}

// // for some reason couldn't make it to work
// const increasingGreenColor = () => {
//   for (let min = 0; min < 256; min++) {
//     for (let max = 256; max >= 0; max--) {
//       setTimeout(() => {
//         document.body.style.backgroundColor = `rgb(${min}, 255, ${max})`
//         document.querySelector('h1').textContent = `rgb(${min}, 255, ${max})`
//         console.log(`min: ${min}, max: ${max}`)
//       }, 1000)
//     }
//   }
// }

document.getElementById('start').addEventListener('click', myCallBack)
// document.getElementById('start').addEventListener('click', increasingGreenColor)
document.getElementById('stop').addEventListener('click', stopChange)
