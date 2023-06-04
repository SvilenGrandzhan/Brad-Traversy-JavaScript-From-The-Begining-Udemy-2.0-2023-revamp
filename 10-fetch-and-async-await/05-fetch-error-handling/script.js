fetch('http://httpstat.us/200')
  .then((response) => response.json())
  .then((json) => console.log(json))
