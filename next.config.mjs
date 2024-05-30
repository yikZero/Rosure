/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.yikzero.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
