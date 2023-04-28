/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: ['*.html', '/public/css/*.css', '/public/js/*.js'],
   theme: {
      extend: {
         container: {
            center: true,
         },
      },
   },
   plugins: [],
}

