
export async function apiFetch(lon=0, lat=0) {
  try {
    const key = import.meta.env.VITE_API_KEY;
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    const result = await fetch(`${baseUrl}&units=imperial`);

    if (result.ok) {
      const data = await result.json();
      console.log(data);
      return data;
    }
  } catch (e) {
    console.log(e);
    alert("Error occured in fetching.");
  }
};

const options = {
  maximumAge: 15000,
};

export function getLongitude() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const long = position.coords.longitude;
      console.log("Longitude from function: " + position.coords.longitude);
      return long;
    }, error, options);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

export function getLatitude() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      console.log("Latitude from function: " + position.coords.latitude);
      return lat;
    }, error, options);
  } 
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

function error() {
    alert("No position available.");
}
