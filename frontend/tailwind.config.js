/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Next.js default paths
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color palette for your clothing resale marketplace
      colors: {
        'brand-primary': '#2c3e50',    // Deep navy blue
        'brand-secondary': '#3498db',  // Bright blue
        'accent': '#e74c3c'            // Vibrant red for highlights
      },
      // Custom spacing and sizing for product cards
      spacing: {
        'product-grid': '16px'
      }
    },
  },
  plugins: [],
}