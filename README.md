# Admitted DK

A modern React web application built with Vite, Relume UI components, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment

This app is configured for deployment on various platforms:

### Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Vercel
3. Vercel will automatically detect the Vite configuration
4. The `vercel.json` file handles SPA routing

### Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. The `netlify.toml` file handles SPA routing

### Other Platforms

For other platforms, ensure that:
- Build command: `npm run build`
- Output directory: `dist`
- All routes redirect to `index.html` (for client-side routing)

## Project Structure

```
├── home/           # Home page components
├── portfolio/      # Portfolio page components
├── contact/        # Contact page components
├── src/            # Application entry point
│   ├── App.jsx     # Main app component with routing
│   ├── main.jsx    # React entry point
│   └── index.css   # Global styles
├── public/         # Static assets
└── dist/           # Production build output
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Relume UI** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Routes

- `/` - Home page
- `/portfolio` - Portfolio page
- `/contact` - Contact page
