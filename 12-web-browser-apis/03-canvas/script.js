// Documentation https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// There is canvas html tag
const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')

// Draw circle
// ctx.beginPath()
// // x starting point, y starting point, radius, how much to fill. 0 , 0.5 * Math.PI, 1 * Math.PI, 1,5 * Math.PI, 2 * Math.PI; 2 is max full circle
// ctx.arc(300, 300, 200, 0, Math.PI)
// // ctx.arc(100, 75, 50, 0, 2 * Math.PI)
// ctx.fill()

// Draw square
// Starting x, Starting Y, width, height
// ctx.rect(50, 50, 200, 100, 50)
// ctx.fill()

// const centerX = canvas.width / 2
// const centerY = canvas.height / 2
// const radius = 70
// ctx.beginPath()
// ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
// ctx.fillStyle = 'green'
// ctx.fill()
// ctx.lineWidth = 5
// ctx.strokeStyle = '#003300'
// ctx.stroke()

// //Draw line
// // Starting point is 0, 0
// ctx.beginPath()
// // color of line
// ctx.strokeStyle = '#000000'
// // width of line
// ctx.lineWidth = 5
// // moving to new coordinates
// ctx.moveTo(10, 10)
// // End coordinates
// ctx.lineTo(300, 300)
// // Draw
// ctx.stroke()

// Draw text
// ctx.font = '30px Arial'
// ctx.fillStyle = 'blue'
// ctx.fillText('String', 300, 100, 20000)
// ctx.strokeStyle = 'green'
// ctx.strokeText('Stroke String', 100, 300, 20000)

const image = document.querySelector('img')
image.style.display = 'none'

// bc it is external resource need to be sure it is loaded
// for that we are using event listener
// Event type is load, bc we are waiting for image to load
image.addEventListener('load', () => {
  // drawImage method is taking the image, X position, Y position, width and height of image
  ctx.drawImage(image, 200, 400, 50, 50)
})
