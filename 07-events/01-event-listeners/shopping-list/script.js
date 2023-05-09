const clearBtn = document.querySelector('#clear')

// clearBtn.onclick = function () {
//   console.log('boom')
// }
const onClick = () => console.log('boom!')
const onDoubleClick = () => console.log('boom! boom!')
const contextMenu = () => console.log('ContextMenu')
const mouseDown = () => {
  document.body.style.backgroundColor = 'orange'
}
const mouseUp = () => {
  document.body.style.backgroundColor = 'white'
}
const mouseWheel = () => {
  console.log('something')
}
const mouseOver = () => {
  document.querySelector('.btn-clear').style.backgroundColor = 'green'
}
const mouseOut = () => {
  document.querySelector('.btn-clear').style.backgroundColor = 'white'
}

// Add event listener
clearBtn.addEventListener('click', onClick)
clearBtn.addEventListener('dblclick', onDoubleClick)
clearBtn.addEventListener('contextmenu', contextMenu)
clearBtn.addEventListener('mousedown', mouseDown)
clearBtn.addEventListener('mouseup', mouseUp)
clearBtn.addEventListener('wheel', mouseWheel)
clearBtn.addEventListener('mouseover', mouseOver)
clearBtn.addEventListener('mouseout', mouseOut)

// git sync test 03