/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'game-dark': '#121212',
                'game-gray': '#1a1a1a',
                'game-light': '#2a2a2a',
                'game-blue': '#4299e1',
            },
        },
    },
    plugins: [],
}