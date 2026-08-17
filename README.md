# Weather App

A simple, fast weather application built with React, TypeScript, and Vite. Search for a city and view current conditions pulled from Openweather API.

## Features

- 🔍 Search weather by city name (Coming soon)
- 📍 Geolocation support ("use my current location")
- 🌡️ Current conditions (e.g., temperature, feels-like, humidity, wind)
- 🌗 Light/dark mode toggle (Coming soon)
- 📱 Responsive layout

## Tech Stack

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — static typing
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Yarn](https://yarnpkg.com/) — package manager

## Prerequisites

- Node.js 18+
- Yarn (v1 classic or Berry — update as appropriate for your setup)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mxe1012/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Configure environment variables

Create a `.env` file in the project root (see `.env.example` if provided):

```bash
VITE_API_KEY=your_api_key_here
VITE_WEATHER_API_BASE_URL=https://api.example.com
```

> Note: Vite only exposes env variables prefixed with `VITE_` to client-side code.

### 4. Run the dev server

```bash
yarn dev
```

The app will be available at `http://localhost:5173` by default.

## Available Scripts

| Command          | Description                              |
|------------------|-------------------------------------------|
| `yarn dev`       | Start the local development server        |
| `yarn build`     | Type-check and build for production        |
| `yarn preview`   | Preview the production build locally       |
| `yarn lint`      | Run ESLint against the codebase            |
| `yarn format`    | Run Prettier to format the codebase        |
| `yarn test`      | Run the test suite                         |

## Project Structure

```
weather-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Icons and other assets
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components
│   ├── types/           # Shared TypeScript types/interfaces
│   ├── utils/           # Helper functions
│   ├── App.tsx
│   ├── functions.tsx    # Helper sunctions
|   ├── Components.tsx      # Reusable UI components
│   └── index.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

