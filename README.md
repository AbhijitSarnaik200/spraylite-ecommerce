
# Spraylite E-commerce Homepage

A responsive frontend assessment project for Spraylite, built with React + Vite.

## Features

- Responsive desktop, tablet, and mobile layouts
- Modern hero section, benefits, product grid, collection banner, reviews, and newsletter section
- Product search
- Wishlist counter and toggle behavior
- Cart functionality:
  - Add products
  - Update quantity
  - Remove products
  - Subtotal calculation
- Interactive hover states
- Responsive mobile navigation
- Toast feedback
- Semantic HTML
- Accessible labels
- Reusable React components

## Tech Stack

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- Lucide React icons
- Google Fonts
- Unsplash placeholder product imagery

## Project Structure

```text
spraylite-final/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Production Build

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project can be deployed on **Vercel** or **Netlify**.

### Vercel

1. Import the GitHub repository into Vercel.
2. Select the default Vite settings.
3. Deploy the project.

### Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Notes

- The checkout button is a frontend placeholder and can be connected to a backend or payment provider in a future iteration.
- Product imagery uses remote placeholder URLs and can be replaced with optimized local assets.
- This project is built as a frontend-only application.

## Author

Built as a frontend assessment project for Spraylite.