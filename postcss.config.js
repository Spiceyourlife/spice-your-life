import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss({
      content: [
        './index.html',
        './src/**/*.js',
        './src/**/*.ts',
        './src/**/*.jsx',
        './src/**/*.tsx',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }),
    autoprefixer(),
  ],
}