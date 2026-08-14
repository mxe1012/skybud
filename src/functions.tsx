
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
  maximumAge: 60000, // cache longitude and latitude for 60 seconds
};

export function getLongitude(): Promise<number> {

  console.log("Getting Longitude...");

  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords.longitude),
      (error) => reject(error),
      options
    );
  });
}

export function getLatitude(): Promise<number> {

  console.log("Getting Latitude...");

  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords.latitude),
      (error) => reject(error),
      options
    );
  });
}

/* 
export function getCoordinates(): Promise<{ lat: number; lon: number }> {
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
  });
}

-- MOVE CODE TO App.tsx LATER --

const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

const handleGetLocation = async () => {
  try {
    const result = await getCoordinates();
    setCoords(result);
  } catch (err) {
    console.error(err);
  }
};
*/

