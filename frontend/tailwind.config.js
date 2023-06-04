/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'tertiary-color': 'var(--tertiary-color)',

        'primary-btn-color': 'var(--primary-btn-color)',
        'secondary-btn-color': 'var(--secondary-btn-color)',
        'info-btn-color': 'var(--info-btn-color)',
        'warning-btn-color': 'var(--warning-btn-color)',
        'success-btn-color': 'var(--success-btn-color)',
        'error-btn-color': 'var(--error-btn-color)'
      }
    }
  },
  plugins: [],
  mode: 'jit'
}
