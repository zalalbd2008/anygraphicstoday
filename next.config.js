/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponents: true,
    serverMiddleware: true,
    externalDir: true,
    serverActions: true, // Enable server actions
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.joomshaper.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
