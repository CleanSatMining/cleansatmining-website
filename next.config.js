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
    ]
  },

  images: {
    domains: [
      'cdn.pixabay.com',
      'www.bbgsmining.com',
      'www.cleansatmining.com',
      'uploads-ssl.webflow.com',
    ],
  },
}

module.exports = withNextIntl(nextConfig)
