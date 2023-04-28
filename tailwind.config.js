/** @type {import('tailwindcss').Config} */
module.exports = {
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

