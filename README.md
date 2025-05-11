# Tantack Example: React + TypeScript + Vite + TanStack Query

This project is a demonstration of a modern React application using TypeScript, Vite, TanStack React Query, and Axios. It fetches and displays user data from the [Fake Store API](https://fakestoreapi.com), allows simulating user login, and includes retry logic for data fetching.

## Features

- **User List:** Fetches and displays a list of users from the Fake Store API.
- **Login Simulation:** Each user row has a "Login" button that simulates a login request.
- **Retry Logic:** A "Retry" button allows you to refetch the user data.
- **React Query:** Uses TanStack React Query for efficient data fetching and caching.
- **React Query Devtools:** Integrated for easy debugging of queries and mutations.
- **Custom Styling:** Clean, modern UI with a styled user table.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

- `src/App.tsx` - Main application component, user table, login, and retry logic.
- `src/hooks/react-query/useUser.tsx` - Custom React Query hook for fetching users.
- `src/api/axios-instance.ts` - Axios instance configured for Fake Store API.
- `src/main.tsx` - App entry point, sets up React Query provider and devtools.
- `src/App.css` - Custom styles for the app.

## Configuration

- **TypeScript:** Strict settings, modern target, JSX support.
- **ESLint:** Recommended rules, React hooks, and refresh plugins.
- **Vite:** Minimal config with React plugin.

## API Reference

- **Base URL:** `https://fakestoreapi.com`
- **Endpoints Used:**
  - `GET /users` - Fetches all users
  - `POST /auth/login` - Simulates user login

## License

This project is for demonstration and educational purposes.
