const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  exportTrailingSlash: true,
  webpack: config => {
    config.plugins.push(new WindiCSSWebpackPlugin)
    return config
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // 30-11-2021: https://www.notion.so/catalandao/Canvis-web-nft-d-advent-41dcd56d5e8f44efba036b785193489b
    // home redirigeix al projecte
    return [
      {
        source: '/',
        destination: '/manifest',
        permanent: false,
      },
    ]
  },
}
