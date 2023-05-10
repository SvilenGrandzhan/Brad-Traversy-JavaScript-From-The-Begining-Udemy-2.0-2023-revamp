// // // On press need to show key, keyCode and code
// // const onKeyPress = (e) => {
// //   const forms = document.querySelectorAll('.key')
// //   forms[0].innerHTML = `${e.key} <small>e.key</small>`
// //   forms[1].innerHTML = `${e.keyCode} <small>e.keyCode</small>`
// //   forms[2].innerHTML = `${e.code} <small>event.code</small>`
// // }
// // window.addEventListener('keypress', onKeyPress)
// // // Looks very ugly but at least it works
// // // Maybe I can do it with object?

// //Actually Brad's second solution is exactly with object
// const onKeyPress = (e) => {
//   const form = document.getElementById('insert')
//   form.innerHTML = ''
//   const keyObject = {
//     'e.key': e.key,
//     'e.keyCode': e.keyCode,
//     'e.code': e.code,
//   }

//   for (let key in keyObject) {
//     const div = document.createElement('div')
//     div.className = 'key'
//     const small = document.createElement('small')
//     const text = document.createTextNode(key)
//     const value = document.createTextNode(keyObject[key])
//     small.appendChild(text)
//     div.appendChild(value)
//     div.appendChild(small)
//     form.appendChild(div)
//   }
// }
// window.addEventListener('keypress', onKeyPress)
