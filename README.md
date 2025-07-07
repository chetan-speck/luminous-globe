# Luminous Globe

An interactive 3D Earth visualization with smooth controls, atmospheric lighting, and a visually rich representation of the planet.

![Screenshot](./public/screenshots/screenshot-1920x1080.png)

## Features

- 3D Earth with high quality day, night, bump, and specular maps
- Ambient space soundtrack for immersive viewing
- Starfield background for cosmic realism
- Dynamic lighting with shadows and emissive night glow
- Responsive camera and smooth orbit controls
- Custom loading and render tracking context
- PWA support: installable on desktop and mobile
- Fully responsive layout and performance aware

## Getting started locally

Follow these steps to **clone**, **install**, and **run** the **Luminous Globe** project on your machine.

### 1. Clone the repository

First, clone the project using Git:

```bash
git clone https://github.com/chetan-speck/luminous-globe.git
```

Then navigate into the project directory:

```bash
cd luminous-globe
```

### 2. Install dependencies

Make sure you have **Node.js ≥ v18** installed. Then install the project dependencies:

```bash
npm install
```

### 3. Run in development mode

Start the development server:

```bash
npm run dev
```

This will launch the app at:

[http://localhost:5173](http://localhost:5173)

Open the URL in your browser. The app supports **hot-reloading**, so changes reflect instantly.

### 4. Build for production

To build a production-optimized version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Then open:

[http://localhost:4173](http://localhost:4173)

### 5. Optional – PWA install (offline support)

After building, the app is a **Progressive Web App (PWA)**. You can:

- Install it from desktop or Android (Chrome/Edge)
- Use it offline (textures/audio pre-cached)
- Pin it to your home screen or desktop

## Requirements

Certainly! Here's the completed section with extra setup tips and system verification steps for your `README.md` or documentation:

## Prerequisites

Make sure you have the following installed and configured before running the project locally:

- [Node.js](https://nodejs.org/en/) - Version 18 or newer recommended
- [npm](https://www.npmjs.com/) - comes with Node.js _(or use `yarn` / `pnpm` if preferred)_
- [Git](https://git-scm.com/) - for cloning the repository and version control
- A modern browser like:
  - [Google Chrome](https://www.google.com/chrome/)
  - [Microsoft Edge](https://www.microsoft.com/edge)
  - [Mozilla Firefox](https://www.mozilla.org/firefox/)

    _(PWA install support works best in Chrome-based browsers)_
