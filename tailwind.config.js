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
        primary: {
          DEFAULT: '#22356F', // Deep Blue
        },
        accent: {
          DEFAULT: '#27AE60', // Emerald Green
        },
        background: {
          DEFAULT: '#FFFFFF', // White
          muted: '#F5F7FA', // Light Gray
        },
        text: {
          DEFAULT: '#222222', // Charcoal
          secondary: '#666666', // Medium Gray
        },
        whatsapp: {
          DEFAULT: '#25D366', // WhatsApp Green
        },
        gold: {
          DEFAULT: '#FFC107', // Gold/Amber
        },
      },
    },
  },
  plugins: [],
};
