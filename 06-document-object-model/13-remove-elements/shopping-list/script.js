// // Remove clear button
// //
// // Arrow function
// const removeClearButton = () => {
//   // Select element clear button
//   const clearButton = document.getElementById('clear')
//   // Call remove method
//   clearButton.remove()
// }
// // removeClearButton()

// // Remove clear button using removeChild method
// //
// // Arrow functions
// const removeClearButtonFromParent = () => {
//   // Select parent of clear Button
//   const clearButtonParent = document.querySelector('.container')
//   // Select clear button
//   const clearB = document.getElementById('clear')
//   clearButtonParent.removeChild(clearB)
// }
// // removeClearButtonFromParent()

// // // Challenge - remove li item using item number
// // //
// // // Arrow function
// // const removeItem = (itemNumber) => {
// //   // Get parent
// //   const parent = document.querySelector('ul')
// //   // Get child
// //   const child = document.querySelector(`li:nth-child(${itemNumber})`)
// //   //Remove
// //   parent.removeChild(child)
// // }
// // // removeItem(1)
// // // removeItem(2)
// // // removeItem(3)
// // // removeItem(4)

// // Challenge - remove all odds items. Apples and Oreos
// //
// // Arrow function
// const removeOddItems = (itemNumber) => {
//   // Get parent
//   const parent = document.querySelector('ul')
//   // Get child
//   const child = document.querySelector(`li:nth-child(${itemNumber})`)
//   // Condition check
//   if (itemNumber % 2 === 1) {
//     parent.removeChild(child)
//   }
// }
// // It does not work. Can't figure out how to circle trough all elements
// // Will try to do it tomorrow with querrySelectorAll
// // add second param (item, index) and check by index % 2 ==== 1

// // Second attempt
// //
// // Get parent
// const parent = document.querySelectorAll('ul')
// // Get odd child
// const child = document.querySelector('li:nth-child(2)')
// // forEach to check for odd elements
// parent.forEach((element) => {
//   if (element % 2 === 1) {
//     parent.removeChild(child)
//   }
// })
//
//Need more exp
