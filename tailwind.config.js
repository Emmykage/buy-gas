/** @type {import('tailwindcss').Config} */
export default {
    content: [    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#e55e27",
          alt: "#1c638b"
        },
        width: {
           "app-width": "1500px"
        },
        maxWidth: {
          "app-layout": "1500px"
        },
        gridTemplateColumns: {
          "home-grid": "auto 400px",
          "checkout": "1fr 2fr",
           "wallet": " auto 400px"
        }
      },
    },
    plugins: [],
  }