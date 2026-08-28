
export async function apiFetch(lon=0, lat=0, endpoint="none", units="imperial") {

    const key = endpoint === "weather" 
    ? import.meta.env.VITE_WEATHER_API_KEY : import.meta.env.VITE_FORECAST_API_KEY;

    try {
        const baseUrl = `https://api.openweathermap.org/data/2.5/${endpoint}?lat=${lat}&lon=${lon}&appid=${key}`;
        const result = await fetch(`${baseUrl}&units=${units}`);

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

export async function apiFetchLocations(query="") {

    try {
        const result = await fetch(`/api/geolocation?query=${encodeURIComponent(query)}`);

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
    maximumAge: 120000, // cache longitude and latitude for 2 minutes
};

export function getCoordinates(): Promise<{ lat: number; lon: number }> {

    console.log("Getting Latitude and Longitude...");

    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.");
            reject(new Error("Geolocation not supported"));
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        }), 
        (error) => reject(error),
        options
        );
    }
    );
}
