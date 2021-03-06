// Pages that we consider to have a higher priority than others
const priorities = {
  '/': 1,
  '/news': 0.9,
};

module.exports = {
  siteUrl: 'https://tlmt.ch',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  exclude: ['/brand'],
  // The default priority should be 0.5 (source: https://www.sitemaps.org/PROTOCOL.html)
  priority: 0.5,
  transform: async ({ changefreq, priority, autoLastmod }, loc) => ({
    loc,
    changefreq,
    priority: priorities[loc] || priority,
    lastmod: autoLastmod && new Date().toISOString(),
  }),
};
