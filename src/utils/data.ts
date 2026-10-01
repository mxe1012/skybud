
export async function apiFetch(lon=0, lat=0, endpoint="none") {

    try {
        const result = await fetch(`/api/current?endpoint=${endpoint}&lon=${encodeURIComponent(lon)}&lat=${encodeURIComponent(lat)}`)
        
        if (result.ok) {
            return await result.json();
        }
        
        throw new Error(`Request to ${endpoint} failed with status ${result.status}`);
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export async function apiFetchLocations(query="") {

    try {
        const result = await fetch(`/api/geolocation?query=${encodeURIComponent(query)}`);

        if (result.ok) {
            return await result.json();
        }

        throw new Error(`Geolocation search failed with status ${result.status}`);
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const options = {
    maximumAge: 120000, // cache longitude and latitude for 2 minutes
};

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
    }
    );
}

export function isOnline(): boolean {
    return navigator.onLine;
}
