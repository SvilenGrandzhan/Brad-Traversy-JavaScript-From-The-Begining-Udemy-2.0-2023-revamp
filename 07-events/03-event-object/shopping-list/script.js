/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
const logo = document.querySelector('img')
// logo.addEventListener('click', (e) => console.log(e))
// const onClick = (e) => console.log(e)
// const onClick = (e) => console.log(e.target)
// const onClick = (e) => console.log(e.currentTarget)
// const onClick = (e) => console.log(e.type)
// const onClick = (e) => console.log(e.timeStamp)
const onClick = (e) => console.log(new Date(e.timeStamp).toLocaleString())
// const onClick = (e) => {
//   console.log(e.target)
//   console.log(e.currentTarget)
// }
// logo.addEventListener('click', onClick)
document.body.addEventListener('click', onClick)
