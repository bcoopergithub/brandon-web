module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
      extend: {
 
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
    // specify other options here
  };