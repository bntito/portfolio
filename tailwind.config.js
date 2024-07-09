module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Habilitar el modo oscuro con la clase 'dark'
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'dark-bg': '#1a202c',
        'dark-text': '#a0aec0',
        // otros colores personalizados
      },
    },
  },
  variants: {
    extend: {
      // Aquí puedes extender las variantes para el modo oscuro si es necesario
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}
