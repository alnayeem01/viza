/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22356F', // Deep Blue
        accent: '#27AE60', // Emerald Green
        background: '#FFFFFF', // White
        'background-muted': '#F5F7FA', // Light Gray
        text: '#222222', // Charcoal
        'text-secondary': '#666666', // Medium Gray
        whatsapp: '#25D366', // WhatsApp Green
        gold: '#FFC107', // Gold/Amber
      },
    },
  },
  plugins: [],
};
