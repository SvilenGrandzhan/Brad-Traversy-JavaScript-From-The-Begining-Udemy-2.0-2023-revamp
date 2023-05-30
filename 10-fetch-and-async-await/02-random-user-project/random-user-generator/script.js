fetch('https://randomuser.me/api').then((response) => response.json())
//   .then((data) => {
//     const array = document.querySelectorAll('p')
//     array.forEach((element) => {
//       if ((element.firstChild.nextElementSibling.innerHTML = 'Name:')) {
//         element.firstChild.nextElementSibling.nextSibling.nodeValue = `${data.results[0].name.first} ${data.results[0].name.last}`
//       }
//       if ((element.firstChild.nextElementSibling.innerHTML = 'Email:')) {
//         element.firstChild.nextElementSibling.nextSibling.nodeValue =
//           data.results[0].email
//       }
//       if ((element.firstChild.nextElementSibling.innerHTML = 'Phone:')) {
//         element.firstChild.nextElementSibling.nextSibling.nodeValue =
//           data.results[0].phone
//       }
//       if ((element.firstChild.nextElementSibling.innerHTML = 'Location:')) {
//         element.firstChild.nextElementSibling.nextSibling.nodeValue =
//           data.results[0].location.city
//       }
//       if ((element.firstChild.nextElementSibling.innerHTML = 'Age:')) {
//         element.firstChild.nextElementSibling.nextSibling.nodeValue =
//           data.results[0].dob.age
//       }
//     })
//   })

// const info = document.querySelector('p').firstChild.nextElementSibling
// console.log(`This should be my verification:  ${info.innerHTML}`)
// console.log(`This is the replace value:  ${info.nextSibling.nodeValue}`)

// const array = document.querySelectorAll('p')
// array.forEach((element) => {
//   console.log(element.firstChild.nextElementSibling.innerHTML)
//   console.log(element.firstChild.nextElementSibling.nextSibling.nodeValue)
// })

// data.results[0].email

// find()
// map()
// keys()
// values()
