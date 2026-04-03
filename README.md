# CiEL - Premium Dining Experience

## Overview

CiEL is a premium, pure vegetarian rooftop dining destination located in the heart of Mumbai. This repository contains the source code for the CiEL web application, designed to provide a high-end, immersive digital experience that reflects the restaurant's sophisticated aesthetic. The application features a smooth, motion-driven interface, a comprehensive interactive menu, and a seamless reservation system.

## Features

- Premium Aesthetic: A sophisticated navy and gold design system tailored for a luxury dining brand.
- Interactive Menu: A detailed, category-based digital menu showcasing the restaurant's culinary offerings.
- Smooth Scrolling: Integration with Lenis for a refined, high-performance scrolling experience.
- Dynamic Animations: Advanced micro-interactions and page transitions powered by Framer Motion.
- Responsive Design: Fully optimized for all device sizes, from mobile to desktop.
- Reservation Integration: Seamless flow for guests to book their tables.
- Location Services: Embedded Google Maps and detailed contact information for easy navigation.

## Tech Stack

- Frontend: React 18, TypeScript, Vite
- Styling: Tailwind CSS
- Animations: Framer Motion
- Components: Radix UI, Lucide React
- Utilities: clsx, tailwind-merge
- Smooth Scroll: Lenis
- Backend/Database: Supabase

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/vinaymore69/CiEL.git
```

2. Navigate to the project directory:

```bash
cd CiEL
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the development server:

```bash
npm run dev
```

Once the server is running, you can view the application at http://localhost:5173 (or the port specified in your terminal).

To build the project for production:

```bash
npm run build
```

## Folder Structure

```bash
CiEL/
├── public/              # Static assets (logos, images)
├── src/
│   ├── components/      # React components (Hero, Menu, Sections)
│   │   └── ui/          # Reusable UI components
│   ├── lib/             # Utility functions and library configurations
│   ├── App.tsx          # Main application entry point
│   ├── main.tsx         # Root rendering file
│   └── index.css        # Global styles and Tailwind directives
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Deployment

The project is configured for deployment on Vercel.

- Platform: Vercel
- Production URL: [CiEL](https://ciel-in.vercel.app/)
- Deployment: Automatic deployments triggered by pushes to the main branch.

## Contact Information

- Location: Hotel Imperial Palace, 45, Teli Gali, Andheri East, Mumbai, Maharashtra 400069
- Phone: +91 98194 33999
- Email: reservations@ciel.restaurant
- Instagram: @ciel_mumbai

## License

Maintained by the project author. All rights reserved.
