module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    // disable: process.env.NODE_ENV !== 'production',
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
    ];
  },
};
