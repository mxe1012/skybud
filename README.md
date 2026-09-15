# Skybud

A simple, fast weather application built with React, TypeScript, and Vite. Search for a city and view current conditions pulled from Openweather API.

https://skybud.netlify.app/

## Features

- 🔍 Search weather by city name, state, and/or country 
- 📍 Geolocation support ("use my current location")
- 🌡️ Current conditions (e.g., temperature, feels-like, humidity, wind)
- 🗓️ Five-day/Three-hour forecast  
- 📱 Responsive layout
- 🌙 Dark mode
- ❤️ Save favorite locations 

## Tech Stack

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — static typing
  * TypeScript is used in lieu of JavaScript to enforce typing throughout the app. This, in turn, makes the app easier to reason about, debug, and reduce type errors.
- [Vite](https://vitejs.dev/) — build tool & dev server
  * Easily preview and debug the app with features such as fast refresh and hot module replacement.
- [npm](https://www.npmjs.com/) — package manager
- [Netlify Functions](https://docs.netlify.com/functions/overview/) — serverless functions for server-to-server API calls
  * Netlify Functions is employed to allow for private server-to-server communication of all API keys. Thus, no API key is exposed to the client, preventing potential leaks. This was done to facilitate secure communication between the client and the API.
  * `@netlify/vite-plugin` runs the Functions runtime locally alongside Vite's dev server, so the same server-to-server flow works in local development.

## Prerequisites

- Node.js 20.19+ or 22.12+ (required by Vite 8)
- npm (bundled with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mxe1012/skybud.git
cd skybud
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root (see `.env.example`):

```bash
API_KEY=your_openweather_api_key_here
GEOLOCATION_API_KEY=your_geolocation_api_key_here
VITE_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

> Note: Vite only exposes env variables prefixed with `VITE_` to client-side code. `API_KEY` and `GEOLOCATION_API_KEY` intentionally omit that prefix — they're read only inside the Netlify Functions, never bundled into the client. `VITE_WEATHER_API_BASE_URL` isn't sensitive, so it's safe to expose.

### 4. Run the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Available Scripts

| Command          | Description                              |
|------------------|-------------------------------------------|
| `npm run dev`    | Start the local development server        |
| `npm run build`  | Type-check and build for production        |
| `npm run preview`| Preview the production build locally       |
| `npm run lint`   | Run ESLint against the codebase            |

## Project Structure

```
skybud/
├── netlify/
├── public/
│   └── assets/
├── src/
│   ├── hooks/
│   ├── styles/
│   ├── ui/
│   │   └── dashboard_components/
│   │       ├── controller_components/
│   │       ├── current_weather_components/
│   │       └── forecast_components/
│   ├── utils/
│   ├── App.tsx
│   └── index.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request