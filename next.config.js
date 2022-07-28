require('dotenv').config()
const path = require('path')


const host = process.env.NODE_ENV === 'production' ? process.env.BACKEND_API_PROD : process.env.BACKEND_API_DEV

const nextConfig = {
  reactStrictMode: true,
  env: {
    FRONTEND_DOMAIN: process.env.FRONTEND_DOMAIN,
    BACKEND_API: host,
    API_VERSION: process.env.API_VERSION,
    APPLICATION_TITLE: 'Slow calculator'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets')],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${host}${process.env.API_VERSION}/:path*` // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
