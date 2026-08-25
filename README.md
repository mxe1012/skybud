# Weather App

A simple, fast weather application built with React, TypeScript, and Vite. Search for a city and view current conditions pulled from Openweather API.

## Features

- 🔍 Search weather by city name 
- 📍 Geolocation support ("use my current location")
- 🌡️ Current conditions (e.g., temperature, feels-like, humidity, wind)
- 🗓️ Five-day/Three-hour forecast  
- 📱 Responsive layout

## Tech Stack

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — static typing
- [Vite](https://vitejs.dev/) — build tool & dev server
- [npm](https://www.npmjs.com/) — package manager

## Prerequisites

- Node.js 18+
- npm (bundled with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mxe1012/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root (see `.env.example`):

```bash
VITE_API_KEY=https://api.example.com
VITE_WEATHER_API_BASE_URL=https://api.example.com
VITE_GEOLOCATION_API_KEY=https://api.example.com
```

> Note: Vite only exposes env variables prefixed with `VITE_` to client-side code.

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
| `npm run format` | Run Prettier to format the codebase        |
| `npm test`       | Run the test suite                         |

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── assets/ # Images and other assets
│   ├── ui/ # UI Components and containers
│   │   ├── Components.tsx
│   │   └── Dashboard.tsx
│   ├── utils/ # Helper functions
│   │   └── functions.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles.css 
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request
