//api key: 0d4ede84419af940fb2ab828e552b3f0
// base URL: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export async function apiFetch(lon=0, lat=0) {
  try {
    const key = "0d4ede84419af940fb2ab828e552b3f0"
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    const res = await fetch(`${baseUrl}&units=imperial`);

    if (res.ok) {
      const data = await res.json();
      return data;
    }
    throw Error("Error");
  } catch (e) {
    console.log(e);
  }
};


export function getLongitude() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const long = position.coords.longitude;
      console.log(position.coords.longitude);
      return long;
    }, error);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

export function getLatitude() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      console.log(position.coords.latitude);
      return lat;
    }, error);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

function error() {
    alert("Sorry, no position available.");
}
