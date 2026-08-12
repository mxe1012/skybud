export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

function success(position) {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
}


function error() {
    alert("Sorry, no position available.");
}
