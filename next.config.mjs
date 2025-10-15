/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devgrandgold.ru',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'grand.gold',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;