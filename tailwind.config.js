/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
        secondary: {
          100: '#fef3c7',
          500: '#f59e0b'
        },
        accent: '#10B981',
        background: '#f9fafb',
        surface: '#ffffff',
        text: {
          DEFAULT: '#111827',
          muted: '#6b7280',
        },
        ringColor: {
      'primary-500': '#3b82f6',
    },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Jetbrain Mono', 'monospace'],
      },
      fontSize: {
        h1: ['2.25rem', {lineHeight: '2.5rem', fontWeight: '700'}],
        h2: ['1.875rem', {lineHeight: '2.25rem', fontWeight: '600'}],
        h3: ['1.5rem', {lineHeight: '2rem', fontWeight: '600'}],
        body: ['1rem', {lineHeight: '1.75rem'}],
      },
    }, // ✅ This closes extend
  }, // ✅ This closes theme
  plugins: [], // ✅ plugins is now at root level, sibling of theme
};