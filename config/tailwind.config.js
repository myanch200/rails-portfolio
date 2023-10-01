const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        signika: ['Signika', 'sans-serif'],
      },
      colors: {
        'cyan': {
          'custom': '#266383'
        },
        'orange': {
          'custom': '#ff5722',
          'lighter': '#ff9800'
        },
        'blue': {
          'custom': '#80cbc4'
        },
        'purple': {
          'custom': '#531486'
      },
    },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/container-queries'),
    ]
  }
}