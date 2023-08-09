// getCurrentPosition()
function currentSuccess(position) {
  const coords = position.coords
  console.log(coords)
  console.log(coords.accuracy)
}

function currentError(error) {
  // Error object has code and message
  console.log(`Error: ${error.code} - ${error.message}`)
}

// Empty object for beginning
const currentOptions = {
  //Use GPS if available
  enableHighAccuracy: true,
  //Time to wait to stop trying to locate
  timeout: 50000,
  // do not cache position
  maximumAge: 0,
}

// Target location
const target = {
  latitude: 41.0234564,
  longitude: -71.4649846,
}

// watchPosition()
function watchSuccess(position) {
  const coords = position.coords
  if (target.latitude === position.latitude && target.longitude === position.longitude) {
    console.log('You found me')
    // Clear position with clearWatch method
    navigator.geolocation.clearWatch(id)
  }
}

function watchError(error) {
  // Error object has code and message
  console.log(`Error: ${error.code} - ${error.message}`)
}

// Empty object for beginning
const watchOptions = {
  //Use GPS if available
  enableHighAccuracy: true,
  //Time to wait to stop trying to locate
  timeout: 50000,
  // do not cache position
  maximumAge: 0,
}

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions)
