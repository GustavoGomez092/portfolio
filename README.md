# Portfolio

A personal portfolio website built with [Astro](https://astro.build), showcasing projects and skills with smooth animations and optimized performance.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Demo

A live demo of this portfolio is available at: `https://your-domain.com`

_(Replace with your actual deployed URL)_

---

## Features

- **Responsive Design**: Mobile-first, fully responsive layouts.
- **Smooth Scrolling**: Powered by [Lenis](https://github.com/studio-freight/lenis).
- **Animations**: Scroll- and trigger-based animations using [GSAP](https://greensock.com/gsap/).
- **Performance Optimization**: Third-party scripts loaded via [Astro Partytown](https://docs.astro.build/en/guides/partytown/) offloading.
- **Sitemap Generation**: Automatic sitemap with [@astrojs/sitemap](https://github.com/withastro/astro/tree/main/packages/integrations/sitemap).

---

## Technologies Used

- [Astro](https://astro.build) (v5.x)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) (v4.x)
- [GSAP](https://greensock.com/gsap/) (v3.x)
- [Lenis](https://github.com/studio-freight/lenis)
- [Astro Partytown](https://docs.astro.build/en/guides/partytown/)
- [Astro Sitemap](https://github.com/withastro/astro/tree/main/packages/integrations/sitemap)
- [@fontsource/meddon](https://github.com/fontsource/fontsource/tree/main/packages/meddon)
- [@fontsource/pretendard](https://github.com/fontsource/fontsource/tree/main/packages/pretendard)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) (v8+) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GustavoGomez092/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Usage

- **Start development server**:

  ```bash
  npm run dev
  ```

- **Build for production**:

  ```bash
  npm run build
  ```

- **Preview production build locally**:

  ```bash
  npm run preview
  ```

---

## Project Structure

```
/
├── public/             # Static assets (images, favicon, etc.)
├── src/                # Source files
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Layouts and templates
│   ├── pages/          # Astro pages (routes)
│   └── styles/         # Global styles and Tailwind config
├── astro.config.mjs    # Astro configuration file
├── package.json        # Project metadata and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

---

## Available Scripts

| Script            | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start local dev server at `localhost:3000` |
| `npm run build`   | Build for production (output to `dist/`)   |
| `npm run preview` | Preview production build locally           |
| `npm run astro`   | Run Astro CLI commands (e.g., `astro add`) |

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

**Gustavo Gomez** – [@GustavoGomez092](https://github.com/GustavoGomez092)

Project Link: [https://github.com/GustavoGomez092/portfolio](https://github.com/GustavoGomez092/portfolio)
