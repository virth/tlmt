module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
  eslint: {
    dirs: ['src'],
  },
  async redirects() {
    return [
      {
        source: '/buchen',
        destination: '/',
        permanent: true,
      },
      {
        source: '/anrufen',
        destination: 'tel:+41792768141',
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: 'https://eepurl.com/hX792X',
        permanent: true,
      },
      {
        source: '/links',
        destination: 'https://linktr.ee/tlmt',
        permanent: true,
      },
      {
        source: '/follow',
        destination: 'https://linktr.ee/tlmt_follow',
        permanent: true,
      },
      {
        source: '/booking',
        destination: 'https://form.jotform.com/223137006943350',
        permanent: true,
      },
      {
        source: '/tour',
        destination: 'https://bnds.us/i3cfba',
        permanent: true,
      },
    ];
  },
};
