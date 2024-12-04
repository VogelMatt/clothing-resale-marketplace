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
      
      colors: {
        'brand-primary': '#2c3e50',    
        'brand-secondary': '#3498db',  
        'accent': '#e74c3c'            
      },
      
      spacing: {
        'product-grid': '16px'
      }
    },
  },
  plugins: [],
}