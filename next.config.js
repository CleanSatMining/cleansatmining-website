const withNextIntl = require('next-intl/plugin')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/fr',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  //TODO update domain list after dynamization and prod launch
  images: {
    domains: [
      'cdn.pixabay.com',
      'www.bbgsmining.com',
      'www.cleansatmining.com',
      'uploads-ssl.webflow.com',
      'localhost',
    ],
  },
}

module.exports = withNextIntl(nextConfig)
