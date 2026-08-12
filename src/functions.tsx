//0d4ede84419af940fb2ab828e552b3f0

export function getLongitude() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(longitude, error);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

function longitude(position) {
  const lon = position.coords.longitude;
  console.log(position.coords.longitude);
  return lon;
}

export function getLatitude() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(latitude, error);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

function latitude(position) {
  const lat = position.coords.latitude;
  console.log(position.coords.latitude);
  return lat;
}

function error() {
    alert("Sorry, no position available.");
}
