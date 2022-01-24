module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Roboto Mono"', 'sans'],
    },
    fontWeight: {
      light: '400',
      normal: '600',
      bold: '700',
    },
    fontSize: {
      sm: ['1rem', { lineHeight: '150%' }], // 16px
      base: ['1.125rem', { lineHeight: '150%' }], // 18px
      lg: ['1.5rem', { lineHeight: '150%' }], // 24px
      xl: ['2rem', { lineHeight: '125%' }], // 32px
      xxl: ['3.25rem', { lineHeight: '5rem' }],
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000 ',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        sundance: {
          DEFAULT: '#D1A65C',
          50: '#F9F4EB',
          100: '#F5EBDB',
          200: '#ECDABC',
          300: '#E3C89C',
          400: '#BF8D36',
          500: '#D1A65C',
          600: '#BF8D36',
          700: '#936D2A',
          800: '#674D1D',
          900: '#3C2D11',
        },
      },
      backgroundImage: {
        josh: "url('/img/band/josh.png')",
        dominik: "url('/img/band/dominik.png')",
        luca: "url('/img/band/luca.png')",
        raphi: "url('/img/band/raphi.png')",
        'josh-gold': "url('/img/band/josh-gold.png')",
        'dominik-gold': "url('/img/band/dominik-gold.png')",
        'luca-gold': "url('/img/band/luca-gold.png')",
        'raphi-gold': "url('/img/band/raphi-gold.png')",
      },
    },
  },
  plugins: [],
};
