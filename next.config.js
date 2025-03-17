/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['lh3.googleusercontent.com'], // Add any image domains you need
  },
};

module.exports = nextConfig; 