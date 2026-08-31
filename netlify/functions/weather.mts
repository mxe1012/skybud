import type { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
    const url = new URL(req.url)

    const endpoint = url.searchParams.get("endpoint") || ""

    const lat = url.searchParams.get("lat") || ""
    const lon = url.searchParams.get("lon") || ""

    const key = endpoint === "weather" ? Netlify.env.get("VITE_WEATHER_API_KEY") : Netlify.env.get("VITE_FORECAST_API_KEY")

    try {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/${endpoint}?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&appid=${key}&units=imperial`);
        //console.log(result)
        if (result.ok) {
        const data = await result.json()
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        })
        }

        return new Response(JSON.stringify({ error: "Upstream API error" }), {
        status: result.status,
        headers: { "Content-Type": "application/json" },
        })
    } catch (e) {
        console.log(e)
        return new Response(JSON.stringify({ error: "Error occurred in fetching." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        })
    }
}

export const config: Config = {
    path: "/api/current",
}