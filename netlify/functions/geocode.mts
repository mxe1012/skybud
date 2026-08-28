import type { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
    const url = new URL(req.url)
    const query = url.searchParams.get("query") || ""

    const key = Netlify.env.get("VITE_GEOLOCATION_API_KEY")

    try {
        const result = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&appid=${key}&limit=5`
        )

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
    path: "/api/geolocation",
}