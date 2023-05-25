// setTimeout(() => changeText('orange', 'green'), 2000)
const timer = setTimeout(() => changeText('orange', 'green'), 3000)

function changeText(h1Color, bgColor) {
  document.querySelector('h1').style.color = h1Color
  document.body.style.backgroundColor = bgColor
}

const button = document.getElementById('cancel')
button.addEventListener('click', () => clearTimeout(timer))
