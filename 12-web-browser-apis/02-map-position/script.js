// Use leafletjs.com
// setView is taking array of latitude and longitude second param is zoom index.
// The lower zoom index is the lower zoom is
const map = L.map('map').setView([33.4168064, -111.9387648], 19)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

L.marker([33.4168064, -111.9387648]).addTo(map).bindPopup('Label popup.<br> Easily customizable.').openPopup()

function getCurrentPosition(position) {
  console.log(position.coords)
}

navigator.geolocation.getCurrentPosition(getCurrentPosition)

// more details in Brad's video
