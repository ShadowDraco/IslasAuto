/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'merchant-banners-s3.snapfinance.com',
       
      },
    ],
  },}

module.exports = nextConfig
