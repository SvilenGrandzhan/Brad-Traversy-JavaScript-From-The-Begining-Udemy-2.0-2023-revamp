const request = () => {
  fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('portrait').src = data.results[0].picture.large
      data.results[0].gender == 'male'
        ? (document.body.className = 'bg-blue-400 text-white overflow-x-hidden')
        : (document.body.className = 'bg-pink-400 text-white overflow-x-hidden')
      const array = document.querySelectorAll('span')
      array.forEach((element) => {
        if (element.innerText == 'Name: ') {
          element.nextSibling.nodeValue = `${data.results[0].name.first} ${data.results[0].name.last}`
        }
        if (element.innerText == 'Email: ') {
          element.nextSibling.nodeValue = data.results[0].email
        }
        if (element.innerText == 'Phone: ') {
          element.nextSibling.nodeValue = data.results[0].phone
        }
        if (element.innerText == 'Location: ') {
          element.nextSibling.nodeValue = data.results[0].location.city
        }
        if (element.innerText == 'Age: ') {
          element.nextSibling.nodeValue = data.results[0].dob.age
        }
      })
    })
}
request()
document.getElementById('generate').addEventListener('click', request)
